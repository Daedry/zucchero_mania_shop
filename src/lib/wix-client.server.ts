import { env } from "@/env";
import { files } from "@wix/media";
import { ApiKeyStrategy, createClient, Tokens } from "@wix/sdk";
import { cookies } from "next/headers";
import { cache } from "react";
import { WIX_SESSION_COOKIE } from "./constants";
import { getWixClient } from "./wix-client.base";

/**
 * ❗ NON usare cache qui
 * Questa funzione dipende dalla request (cookies)
 */
export async function getWixServerClient() {
    let tokens: Tokens | undefined;

    try {
        const cookieStore = await cookies();
        const raw = cookieStore.get(WIX_SESSION_COOKIE)?.value;

        if (raw) {
            tokens = JSON.parse(raw);
        }
    } catch {
        // ❌ niente console.error in build
    }

    return getWixClient(tokens);
}

/**
 * ✅ Qui cache VA BENISSIMO
 * Non dipende dalla request
 */
export const getWixAdminClient = cache(() => {
    return createClient({
        modules: { files },
        auth: ApiKeyStrategy({
            apiKey: env.WIX_API_KEY,
            siteId: env.NEXT_PUBLIC_WIX_SITE_ID,
        }),
    });
});