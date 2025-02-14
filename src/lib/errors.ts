/** Tipo per gestire gli errori di Wix API */
export interface WixApiError {
    details?: {
        applicationError?: {
            code?: string;
        };
    };
}

/** Type Guard per verificare se un errore è di tipo WixApiError */
export function isWixApiError(error: unknown): error is WixApiError {
    return (
        typeof error === "object" &&
        error !== null &&
        "details" in error &&
        typeof (error as WixApiError).details?.applicationError?.code === "string"
    );
}