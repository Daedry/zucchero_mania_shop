import { getWixServerClient } from "@/lib/wix-client.server";
import { getProductById } from "@/wix-api/products";
import { notFound, redirect } from "next/navigation";

interface PageProps {
    params: { id: string };
    searchParams: Record<string, string | string[]>;
}

export default async function Page({ params, searchParams }: PageProps) {
    const searchParamsString = new URLSearchParams(
      Object.entries(searchParams).flatMap(([key, value]) =>
        Array.isArray(value)
          ? value.map((v) => [key, v])
          : [[key, value]]
      )
    ).toString();

    if (params.id === "someId") {
        redirect(`/products/i-m-a-product-1?${searchParamsString}`);
    }

    const product = await getProductById(getWixServerClient(), params.id);

    if (!product) notFound();

    redirect(`/products/${product.slug}?${searchParamsString}`);
}
