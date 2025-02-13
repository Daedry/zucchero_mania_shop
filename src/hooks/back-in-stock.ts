import { wixBrowserClient } from "@/lib/wix-client.browser";
import {
    BackInStockNotificationRequestValues,
    createBackInStockNotificationRequest,
} from "@/wix-api/backInStockNotifications";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";

// Definizione del tipo per l'errore
interface WixApiError {
    details?: {
        applicationError?: {
            code?: string;
        };
    };
}

// Type Guard per verificare se l'errore è di tipo WixApiError
function isWixApiError(error: unknown): error is WixApiError {
    return (
        typeof error === "object" &&
        error !== null &&
        "details" in error &&
        typeof (error as WixApiError).details?.applicationError?.code === "string"
    );
}

export function useCreateBackInStockNotificationRequest() {
    const { toast } = useToast();

    return useMutation({
        mutationFn: (values: BackInStockNotificationRequestValues) =>
            createBackInStockNotificationRequest(wixBrowserClient, values),
        onError(error: unknown) {
            console.error(error);

            if (
                isWixApiError(error) && error.details &&
                error.details.applicationError?.code ===
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
