import { wixBrowserClient } from "@/lib/wix-client.browser";
import {
    BackInStockNotificationRequestValues,
    createBackInStockNotificationRequest,
} from "@/wix-api/backInStockNotifications";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";

export function useCreateBackInStockNotificationRequest() {
    const { toast } = useToast();

    return useMutation({
        mutationFn: (values: BackInStockNotificationRequestValues) =>
            createBackInStockNotificationRequest(wixBrowserClient, values),
        onError(error) {
            console.error(error);
            if (
            (error as any).details.applicationError.code ===
            "BACK_IN_STOCK_NOTIFICATION_REQUEST_ALREADY_EXISTS"
            ) {
            toast({
                variant: "destructive",
                description: "Ti sei già iscritto a questo prodotto.",
            });
            } else {
            toast({
                variant: "destructive",
                description: "Qualcosa è andato storto. Per favore riprova.",
            });
            }
        },
    });
}