import Order from "@/components/Order";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getLoggedInMember } from "@/wix-api/members";
import { getOrder } from "@/wix-api/orders";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClearCart from "./ClearCart";

interface PageProps {
    searchParams: URLSearchParams | Record<string, string | string[] | undefined>;
}

export const metadata: Metadata = {
    title: "Checkout success",
};

export default async function Page({ searchParams }: PageProps) {
    // ✅ Convertiamo `searchParams` in un oggetto certo
    let orderId: string | undefined;

    if (searchParams instanceof URLSearchParams) {
        // ✅ Se `searchParams` è un URLSearchParams, usiamo `.get()`
        orderId = searchParams.get("orderId") ?? undefined;
    } else {
        // ✅ Se `searchParams` è un oggetto, accediamo direttamente
        const paramValue = searchParams.orderId;
        orderId = Array.isArray(paramValue) ? paramValue[0] : paramValue;
    }

    if (!orderId) {
        notFound(); // Se `orderId` è mancante, reindirizza a 404
    }

    const wixClient = getWixServerClient();

    const [order, loggedInMember] = await Promise.all([
        getOrder(wixClient, orderId),
        getLoggedInMember(wixClient),
    ]);

    if (!order) {
        notFound();
    }

    const orderCreatedDate = order._createdDate
        ? new Date(order._createdDate)
        : null;

    return (
        <main className="mx-auto flex max-w-3xl flex-col items-center space-y-5 px-5 py-10">
            <h1 className="text-3xl font-bold">Abbiamo ricevuto il tuo ordine</h1>
            <p>
                I dettagli dell&apos;ordine sono stati inviati al tuo indirizzo email. 
                Grazie per aver scelto Zucchero Mania!
            </p>
            <h2 className="text-2xl font-bold">Dettagli ordine</h2>
            <Order order={order} />
            {loggedInMember && (
                <Link href="/profile" className="block text-primary hover:underline">
                    Tutti i tuoi ordini
                </Link>
            )}
            {orderCreatedDate && orderCreatedDate.getTime() > Date.now() - 60_000 * 5 && <ClearCart />}
        </main>
    );
}
