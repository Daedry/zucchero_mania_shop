"use client";

import {
    NavigationMenu,
    // NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { cn } from "@/lib/utils";
// import { collections } from "@wix/stores";
import Link from "next/link";

interface MainNavigationProps {
    //collections: collections.Collection[] | string[];
    className?: string;
}

export default function MainNavigation({
    //collections,
    className,
}: MainNavigationProps) {

    // const allowedCategories = [
    //     "basi-e-supporti",
    //     "strumenti-per-cake-design",
    //     "coloranti-e-spray",
    //     "decorazioni-commestibili",
    //     "stampi-e-tortiere",
    //     "accessori-per-feste",
    //     "ingredienti",
    //     "attrezzature-professionali", 
    // ];

    // const basiEsupporti = [
        
    // ]

    // const filteredCollections = collections.filter((collection) =>
    //     allowedCategories.includes(collection.slug)
    // );
    
    //console.log(collections);
    // console.log('filteredCollections', filteredCollections); 

    return (
        <NavigationMenu className={className}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="text-base">Home</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    {/* da ripristinare /shop */}
                    <Link href="/" legacyBehavior passHref>  
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className="text-base">Shop</span>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <span className="text-base">Categorie</span>
                    </NavigationMenuTrigger>
                    {/* <NavigationMenuContent>
                        <ul className="p-4">
                        {collections.map((collection) => (
                            allowedCategories.includes(collection.slug) &&
                            <li key={collection._id}>
                            <Link
                                href={`/collections/${collection.slug}`}
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    "w-full justify-start whitespace-nowrap",
                                )}
                                >
                                {collection.name}
                                </NavigationMenuLink>
                            </Link>
                            </li>
                        
                        ))}
                        </ul>
                    </NavigationMenuContent> */}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}