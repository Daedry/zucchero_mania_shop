"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { collections } from "@wix/stores";
import Link from "next/link";

interface MainNavigationProps {
    collections: collections.Collection[];
    className?: string;
}

// Hover + stato attivo: sfondo tenue, testo rimane scuro
const hoverVariants = {
    pink: cn(
        "hover:bg-primary/25 hover:text-foreground",
        "data-[active]:bg-primary/25 data-[active]:text-foreground",
        // override del grigio di default al click/open
        "focus:bg-primary/25 focus:text-foreground",
    ),
    teal: cn(
        "hover:bg-teal/20 hover:text-foreground",
        "data-[active]:bg-teal/20 data-[active]:text-foreground",
        "focus:bg-teal/20 focus:text-foreground",
    ),
};

const NAV_LINKS: { href: string; label: string; variant: keyof typeof hoverVariants }[] = [
    { href: "/",     label: "Home",      variant: "pink" },
    { href: "/shop", label: "Shop",      variant: "teal" },
];

export default function MainNavigation({
    collections,
    className,
}: MainNavigationProps) {
    return (
        <NavigationMenu className={className}>
            <NavigationMenuList className="gap-0.5">

                {/* ── Link semplici ── */}
                {NAV_LINKS.map(({ href, label, variant }) => (
                    <NavigationMenuItem key={href}>
                        <Link href={href} legacyBehavior passHref>
                            <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    hoverVariants[variant],
                                )}
                            >
                                <span className="text-[15px]">{label}</span>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}

                {/* ── Categorie con dropdown ── */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            hoverVariants.pink,
                            // Quando il dropdown è aperto: sfondo pink (non grigio)
                            "data-[state=open]:bg-primary/25 data-[state=open]:text-foreground",
                        )}
                    >
                        <span className="text-[15px]">Categorie</span>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="p-2 min-w-[200px]">
                            {collections.map((collection, i) => (
                                <li key={collection._id}>
                                    <Link
                                        href={`/collections/${collection.slug}`}
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "w-full justify-start whitespace-nowrap text-[14px]",
                                                i % 2 === 0
                                                    ? "hover:bg-teal/15 hover:text-foreground focus:bg-teal/15"
                                                    : "hover:bg-primary/20 hover:text-foreground focus:bg-primary/20",
                                            )}
                                        >
                                            {collection.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}
