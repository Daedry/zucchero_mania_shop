import { products } from "@wix/stores";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const twConfig = resolveConfig(tailwindConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatCurrency(price: number | string, currency: string = "EUR") {
  return Intl.NumberFormat("it-IT", {
    style: "currency",
    currency,
  }).format(Number(price));
}

export function findVariant(
  product: products.Product,
  selectedOptions: Record<string, string>,
) {
  if (!product.manageVariants) return null;

  return product.variants?.find((variant) => {
    return Object.entries(selectedOptions).every(
      ([Key, value]) => variant.choices?.[Key] === value,
    )
  }) || null;
}

export function checkInStock(
  product: products.Product,
  selectedOptions: Record<string, string>,
) {
  const variant = findVariant(product, selectedOptions);
  return variant
  ? variant.stock?.quantity !== 0 && variant.stock?.quantity
  : product.stock?.inventoryStatus === products.InventoryStatus.IN_STOCK || product.stock?.inventoryStatus === products.InventoryStatus.PARTIALLY_OUT_OF_STOCK;
}