"use client";

import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MainNavigation from "./MainNavigation";
import MobileMenu from "./MobileMenu";
import ShoppingCartButton from "./ShoppingCartButton";
import { collections as wixCollections } from "@wix/stores";
import { members as wixMembers } from "@wix/members";
import { currentCart } from "@wix/ecom";

interface NavbarClientProps {
  cart: currentCart.Cart | null;
  loggedInMember: wixMembers.Member | null | undefined;
  collections: wixCollections.Collection[];
}

export default function NavbarClient({
  cart,
  loggedInMember,
  collections,
}: NavbarClientProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-md shadow-md"
          : "bg-background shadow-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-5"
        }`}
      >
        <Suspense>
          <MobileMenu
            collections={collections}
            loggedInMember={loggedInMember}
          />
        </Suspense>

        <div className="flex flex-wrap items-center gap-5">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Zucchero Mania logo"
              width={scrolled ? 140 : 180}
              height={scrolled ? 46 : 60}
              className="transition-all duration-300"
            />
          </Link>
          <MainNavigation
            collections={collections}
            className="hidden lg:flex"
          />
        </div>

        <SearchField className="hidden max-w-96 lg:inline" />

        <div className="flex items-center justify-center gap-5">
          <UserButton
            loggedInMember={loggedInMember}
            className="lg:inline-flex"
          />
          <ShoppingCartButton initialData={cart} />
        </div>
      </div>
    </header>
  );
}
