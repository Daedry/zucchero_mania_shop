import { products } from "@wix/stores";
import { Button, ButtonProps } from "./ui/button";
import { addToCart } from "@/wix-api/cart";
import { wixBrowserWixClient } from "@/lib/wix-client.browser";

interface AddToCartButtonProps extends ButtonProps {
    product: products.Product;
    selectedOptions: Record<string, string>;
    quantity: number;
}   

export default function AddToCartButton({
    product, 
    selectedOptions, 
    quantity,
    className,
    ...props
}: AddToCartButtonProps) {
    return (
        <Button 
            onClick={() => 
                addToCart(wixBrowserWixClient,
                    {
                    product, 
                    selectedOptions, 
                    quantity
                })
            }
        >
            Add to cart
        </Button>
    );
}