import { wixBrowserWixClient } from "@/lib/wix-client.browser";
import { addToCart, AddToCartValues, getCart } from "@/wix-api/cart";
import { QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { currentCart } from "@wix/ecom";
import { useToast } from "./use-toast";

const queryKey: QueryKey = ['cart'];

export function useCart(initialData: currentCart.Cart | null) {
    return useQuery({
        queryKey,
        queryFn: () => getCart(wixBrowserWixClient),
        initialData,
    })
}

export function useAddItemToCart() {
    const queryClient = useQueryClient();

    const {toast} = useToast();

    return useMutation({
        mutationFn: (values: AddToCartValues) => addToCart(wixBrowserWixClient, values),
        onSuccess(data) {
            toast({description: "Item added to cart"})
            queryClient.cancelQueries({queryKey})
            queryClient.setQueryData(queryKey, data.cart);
        },
        onError(error) {
            console.error(error);
            toast({description: "Error adding item to cart", variant: "destructive"})
        }
    })
}