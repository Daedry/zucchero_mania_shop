import { products } from "@wix/stores";
import Link from "next/link";
import WixImage from "./WixImage";
import DiscountBadge from "./DiscountBadge";
import { formatCurrency } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProductProps {
    product: products.Product;
}

export default function Product({ product }: ProductProps) {
    const mainImage = product.media?.mainMedia?.image;
    const price = getFormattedPrice(product);

    return (
        <Link
            href={`/products/${product.slug}`}
            className="group flex flex-col bg-white border border-border/50 rounded-xl overflow-hidden
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* ── Immagine ── */}
            <div className="relative overflow-hidden aspect-square bg-gray-50">
                <WixImage
                    mediaIdentifier={mainImage?.url}
                    alt={mainImage?.altText}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge ribbon / sconto – top-left */}
                {(product.ribbon || product.discount) && (
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
                        {product.ribbon && (
                            <span className="text-[10px] font-extrabold uppercase tracking-widest
                                bg-primary text-white px-2.5 py-1 leading-none rounded-full">
                                {product.ribbon}
                            </span>
                        )}
                        {product.discount && <DiscountBadge data={product.discount} />}
                    </div>
                )}

                {/* Overlay leggero */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8
                    transition-colors duration-300 pointer-events-none" />

                {/* Badge "Scopri" – slide su dal basso, stile in linea col sito */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-3
                    translate-y-3 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-300 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 rounded-full
                        bg-white/90 backdrop-blur-sm shadow-md
                        px-4 py-1.5 text-[11px] font-semibold text-foreground">
                        Scopri
                        <ArrowRight className="size-3 text-primary" />
                    </span>
                </div>
            </div>

            {/* ── Info prodotto ── */}
            <div className="px-3.5 py-3 flex items-start justify-between gap-2">
                <p className="text-[13px] font-semibold leading-snug line-clamp-2 text-foreground flex-1">
                    {product.name}
                </p>
                <span className="text-[13px] font-bold text-primary shrink-0 mt-0.5 whitespace-nowrap">
                    {price}
                </span>
            </div>
        </Link>
    );
}

function getFormattedPrice(product: products.Product) {
    const minPrice = product.priceRange?.minValue;
    const maxPrice = product.priceRange?.maxValue;
    if (minPrice && maxPrice && minPrice !== maxPrice) {
        return `Da ${formatCurrency(minPrice, product.priceData?.currency)}`;
    }
    return (
        product.priceData?.formatted?.discountedPrice ||
        product.priceData?.formatted?.price ||
        "n/a"
    );
}
