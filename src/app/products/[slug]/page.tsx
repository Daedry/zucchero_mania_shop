import Product from "@/components/Product";
import CreateProductReviewButton from "@/components/reviews/CreateProductReviewButton";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getLoggedInMember } from "@/wix-api/members";
import { getProductBySlug, getRelatedProducts } from "@/wix-api/products";
import { getProductReviews } from "@/wix-api/reviews";
import { products } from "@wix/stores";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductDetails from "./ProductDetails";
import ProductReviews, {
    ProductReviewsLoadingSkeleton,
} from "./ProductReviews";

interface PageProps {
    params: Promise<{ slug: string }>;
}

import { use } from "react";

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {

    const { slug } = await params;
    
    if (!slug){
        notFound();
    }    

    const wixClient = await getWixServerClient();

    const product = await getProductBySlug(wixClient, slug);

    if (!product) notFound();

    const mainImage = product.media?.mainMedia?.image;

    return {
        title: product.name,
        description: "Get this product on Flow Shop",
        openGraph: {
            images: mainImage?.url
            ? [
                {
                    url: mainImage.url,
                    width: mainImage.width,
                    height: mainImage.height,
                    alt: mainImage.altText || "",
                },
                ]
            : undefined,
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    
    console.log("SLUG: " + slug);

    const wixClient = await getWixServerClient();
    
    const product = await getProductBySlug(wixClient, slug);

    if (!product?._id) notFound();

    return (
        <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
            <ProductDetails product={product} />
            <hr />
            <Suspense fallback={<RelatedProductsLoadingSkeleton />}>
            <RelatedProducts productId={product._id} />
            </Suspense>
            <hr />
            <div className="space-y-5">
            <h2 className="text-2xl font-bold">Recensioni</h2>
            <Suspense fallback={<ProductReviewsLoadingSkeleton />}>
                <ProductReviewsSection product={product} />
            </Suspense>
            </div>
        </main>
    );
}

interface RelatedProductsProps {
    productId: string;
}

async function RelatedProducts({ productId }: RelatedProductsProps) {
    const wixClient = await getWixServerClient();
    const relatedProducts = await getRelatedProducts(
        wixClient,
        productId,
    );

    if (!relatedProducts.length) return null;

    return (
        <div className="space-y-5">
            <h2 className="text-2xl font-bold">Potrebbero interessarti anche questi prodotti:</h2>
            <div className="flex grid-cols-2 flex-col gap-5 sm:grid lg:grid-cols-4">
            {relatedProducts.map((product) => (
                <Product key={product._id} product={product} />
            ))}
            </div>
        </div>
    );
}

function RelatedProductsLoadingSkeleton() {
    return (
    <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
        ))}
    </div>
    );
}

interface ProductReviewsSectionProps {
    product: products.Product;
}

async function ProductReviewsSection({ product }: ProductReviewsSectionProps) {
    if (!product._id) return null;

    const wixClient = await getWixServerClient();
    const loggedInMember = await getLoggedInMember(wixClient);

    const existingReview = loggedInMember?.contactId
        ? use(getProductReviews(wixClient, {
            productId: product._id,
            contactId: loggedInMember.contactId,
        }))?.items[0]
        : null;

    return (
        <div className="space-y-5">
            <CreateProductReviewButton
                product={product}
                loggedInMember={loggedInMember}
                hasExistingReview={!!existingReview}
            />
            <ProductReviews product={product} />
        </div>
    );
}