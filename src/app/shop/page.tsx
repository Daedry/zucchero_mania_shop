import PaginationBar from "@/components/PaginationBar";
import Product from "@/components/Product";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { ProductsSort, queryProducts } from "@/wix-api/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageProps {
    searchParams: Promise<{
        q?: string;
        page?: string;
        collection?: string[];
        price_min?: string;
        price_max?: string;
        sort?: string;
    }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {

    const { q } = await searchParams;
    return {
        title: q ? `Risultati per "${q}"` : "Prodotti",
    };
}

export default async function Page({
    searchParams
}: PageProps) {

    const { q, page, collection, price_min, price_max, sort } = await searchParams;

    const collectionIds = collection;

    const title = q ? `Risultati per "${q}"` : "Prodotti";

    return (
        <div className="space-y-10">
        <h1 className="text-center text-3xl font-bold md:text-4xl">{title}</h1>
        <Suspense fallback={<LoadingSkeleton />} key={`${q}-${page}`}>
            <ProductResults
            q={q}
            page={parseInt(page || "1")}
            collectionIds={collectionIds}
            priceMin={price_min ? parseInt(price_min) : undefined}
            priceMax={price_max ? parseInt(price_max) : undefined}
            sort={sort as ProductsSort}
            />
        </Suspense>
        </div>
    );
}

interface ProductResultsProps {
    q?: string;
    page: number;
    collectionIds?: string[];
    priceMin?: number;
    priceMax?: number;
    sort?: ProductsSort;
}

async function ProductResults({
    q,    
    page,
    collectionIds,
    priceMin,
    priceMax,
    sort,
}: ProductResultsProps) {
    const pageSize = 8;

    const wixClient = await getWixServerClient();

    const products = await queryProducts(wixClient, {
        q,
        limit: pageSize,
        skip: (page - 1) * pageSize,
        collectionIds,
        priceMin,
        priceMax,
        sort,
    });

    if (page > (products.totalPages || 1)) notFound();

    return (
        <div className="space-y-10 group-has-[[data-pending]]:animate-pulse">
        <p className="text-center text-xl">
            {products.totalCount}{" "}
            {products.totalCount === 1 ? "prodotto trovato" : "prodotti trovati"} 
        </p>
        <div className="flex grid-cols-2 flex-col gap-5 xs:grid-cols-2 sm:grid xl:grid-cols-4 2xl:grid-cols-5">
            {products.items.map((product) => (
            <Product key={product._id} product={product} />
            ))}
        </div>
        <PaginationBar currentPage={page} totalPages={products.totalPages || 1} />
        </div>
    );
}

function LoadingSkeleton() {
    return (
        <div className="space-y-10">
        <Skeleton className="mx-auto h-9 w-52" />
        <div className="flex grid-cols-2 flex-col gap-5 sm:grid xl:grid-cols-3 2xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-[26rem]" />
            ))}
        </div>
        </div>
    );
}