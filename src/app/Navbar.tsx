import { getWixServerClient } from "@/lib/wix-client.server";
import { getCart } from "@/wix-api/cart";
import { getCollections } from "@/wix-api/collections";
import { getLoggedInMember } from "@/wix-api/members";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
    const wixClient = await getWixServerClient();

    const [cart, loggedInMember, collections] = await Promise.all([
        getCart(wixClient),
        getLoggedInMember(wixClient),
        getCollections(wixClient),
    ]);

    return (
        <NavbarClient
            cart={cart}
            loggedInMember={loggedInMember}
            collections={collections}
        />
    );
}
