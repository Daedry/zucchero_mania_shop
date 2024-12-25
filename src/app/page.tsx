/* eslint-disabled @next/next/no-img-element */
import Image from "next/image";
import banner from "@/assets/banner.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { delay } from "@/lib/utils";
import { Suspense } from "react";
import { getWixClient } from "@/lib/wix-client.base";
import Product from "@/components/Product";
import { Skeleton } from "@/components/ui/skeleton";
import { getCollectionsBySlug } from "@/wix-api/collection";
import { queryProducts } from "@/wix-api/product";

export default function Home() {
  return (
    <main className="max-w-7x1 mx.auto px-5 py-10">
      <div className="flex items-center bg-secondary md:h96">
        <div className="space-y-7 p-10 text-center md:w-1/2">
          <h1 className="text-3xl md:text4xl font-bold">
            Zucchero Mania Shop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <Button asChild className="mt-10">
            <Link href="/shop">
              Shop now <ArrowRight className="ml-2 size-5"/>
            </Link>
          </Button>
        </div>
        <div className="relative hidden md:block h-full w-1/2">
          <Image 
            src={banner} 
            alt="banner" 
            className="h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent"/>
        </div>
      </div>
      <Suspense fallback={<LoadingScheleton/>}>
        <FeaturedProducts/>
      </Suspense>
    </main>
  );
}

async function FeaturedProducts() {
  await delay(1000);
  const wixClient = getWixClient();
  const collection = await getCollectionsBySlug('prodotti-in-evidenza');

  if(!collection?._id){
    return null;
  }

  const featuredProducts = await queryProducts({
    collectionIds: collection._id,
    sort: "last_updated"
  });

  if(!featuredProducts.items.length){
    return null;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Featured products</h2>
      <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product}/>
        ))}
      </div>
    </div>
  );
}

function LoadingScheleton() {
  return (
    <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-12">
      {Array.from({length: 8}).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full"/>
      ))}
    </div>
  )
}