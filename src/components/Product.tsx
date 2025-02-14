import { products } from "@wix/stores";
import Link from "next/link";
import WixImage from "./WixImage";
import Badge from "./ui/badge";
import { formatCurrency } from "@/lib/utils";
import DiscountBadge from "./DiscountBadge";

interface ProductProps {
    product: products.Product;
}

export default function Product({product}: ProductProps) {
    
    const mainImage = product.media?.mainMedia?.image;

    return (
        <Link href={`/products/${product.slug}`}
            className="border h-full bg-card transition-shadow duration-200 hover:shadow-md"
        >
            <div className="relative overflow-hidden ">
                <WixImage 
                    mediaIdentifier={mainImage?.url} 
                    alt={mainImage?.altText}
                    width={600}
                    height={600}
                    className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 flex flex-wrap items-center gap-2">
                    {product.ribbon && <Badge>{product.ribbon}</Badge>}
                    {product.discount && <DiscountBadge data={product.discount}/>}
                    <Badge className="bg-secondary font-semibold text-secondary-foreground ">
                        {getFormettedPrice(product)}
                    </Badge>
                </div>
            </div>
            {/*<div className="space-7-3 p-3">
                <div className="text-base font-semibold">{product.name}</div>
                <div 
                    className="line-clamp-5"
                    dangerouslySetInnerHTML={{__html: product.description || ""}}
                />
            </div>*/}
        </Link>
    )
}

function getFormettedPrice(product: products.Product) {
    const minPrice = product.priceRange?.minValue;
    const maxPrice = product.priceRange?.maxValue;

    if(minPrice && maxPrice && minPrice !== maxPrice){
        return `${formatCurrency(minPrice, product.priceData?.currency)}`;
    } else {
        return product.priceData?.formatted?.discountedPrice || product.priceData?.formatted?.price || "n/a";
    }
}