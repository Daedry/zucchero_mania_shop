/* eslint-disabled @next/next/no-img-element */
import Image from "next/image";
import banner from "@/assets/banner.jpg";
import aboutImg from "@/assets/about.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles, CakeSlice, Phone, Paintbrush, Scissors, Package, Star, Cookie } from "lucide-react";
import { Suspense } from "react";
import Product from "@/components/Product";
import { Skeleton } from "@/components/ui/skeleton";
import { getCollectionBySlug, getCollections } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { getWixServerClient } from "@/lib/wix-client.server";

// ─── Costanti colore brand ─────────────────────────────────────────────────────
const TEAL = "rgb(1,182,216)";
const PINK = "hsl(341.284,80%,73%)";

// ─── Config categorie: icona + colore brand alternato ────────────────────────
const CATEGORY_CONFIG = [
  { icon: CakeSlice,   useTeal: false },
  { icon: Paintbrush,  useTeal: true  },
  { icon: Sparkles,    useTeal: false },
  { icon: Scissors,    useTeal: true  },
  { icon: Cookie,      useTeal: false },
  { icon: Package,     useTeal: true  },
] as const;

// ─── HOME ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] md:min-h-[80vh] flex items-center">

        {/* Layer 1 – immagine */}
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="Zucchero Mania"
            fill
            className="object-cover object-center scale-105"
            priority
          />
        </div>

        {/* Layer 2 – gradiente bicolore */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, white 0%, white 38%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.3) 65%, transparent 80%)",
          }}
        />

        {/* Glow teal basso-destra */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-30"
          style={{ background: `radial-gradient(ellipse at bottom right, ${TEAL}, transparent 70%)` }}
        />
        {/* Glow pink alto-sinistra */}
        <div
          className="absolute top-0 left-0 w-1/3 h-1/2 opacity-15"
          style={{ background: `radial-gradient(ellipse at top left, ${PINK}, transparent 70%)` }}
        />

        {/* Layer 3 – contenuto */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 w-full py-20 md:py-28">
          <div className="max-w-xl space-y-7">

            {/* Label sopra il titolo */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: TEAL }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: TEAL }}>
                Cake Design · Reggio Emilia
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              Crea dolci<br />
              che{" "}
              <span className="text-primary">emozionano</span>
              <br />
              <span style={{ color: TEAL }}>e stupiscono</span>
            </h1>

            {/* Sottotitolo */}
            <p className="text-muted-foreground leading-relaxed max-w-sm text-base">
              Stampi, coloranti, decorazioni e cialde personalizzate.
              Tutto ciò che ti serve per trasformare ogni torta in un&apos;opera d&apos;arte.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="lg" className="shadow-md">
                <Link href="/shop">
                  Scopri il negozio <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 bg-white/80 backdrop-blur-sm font-semibold"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                <Link href="/shop">Cialde su ordinazione</Link>
              </Button>
            </div>

          </div>
        </div>

        {/* Striscia decorativa */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(to right, ${PINK}, ${TEAL}, transparent)` }}
        />
      </section>

      {/* ── PRODOTTI IN EVIDENZA ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <Suspense fallback={<LoadingSkeletonFeatured />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </section>

      {/* ── CATEGORIE ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "rgba(1,182,216,0.05)" }}>
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeader
            tag="Le nostre collezioni"
            title="Esplora le Categorie"
            subtitle="Trova esattamente ciò che cerchi tra le nostre selezioni"
            href="/shop"
          />
          <Suspense fallback={<LoadingSkeletonCategories />}>
            <CategoriesGrid />
          </Suspense>
        </div>
      </section>

      {/* ── PERCHÉ SCEGLIERCI ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeader
            tag="I nostri servizi"
            title="Perché scegliere Zucchero Mania"
            subtitle="Non solo prodotti — un servizio completo per chi ama il cake design"
            teal
          />
          <OfferingsGrid />
        </div>
      </section>

      {/* ── CHI SIAMO ────────────────────────────────────────────────── */}
      <AboutSection />

    </main>
  );
}

// ─── FEATURED PRODUCTS ───────────────────────────────────────────────────────
async function FeaturedProducts() {
  const wixClient = await getWixServerClient();
  const collection = await getCollectionBySlug(wixClient, "prodotti-in-evidenza");
  if (!collection?._id) return null;

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
    sort: "last_updated",
  });
  if (!featuredProducts.items.length) return null;

  return (
    <div className="space-y-10">

      {/* Header centrato */}
      <div className="flex flex-col items-center text-center gap-3">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: TEAL }}
        >
          ✦ I più amati ✦
        </span>
        <h2 className="text-3xl font-bold tracking-tight">Prodotti in Evidenza</h2>
        {/* Linea decorativa bicolore */}
        <div className="flex items-center gap-0 mt-1">
          <div className="h-px w-10 bg-primary/40" />
          <div className="size-2 rounded-full bg-primary mx-1" />
          <div className="h-px w-6 bg-primary/20" />
          <div className="h-px w-6 opacity-20 mx-1" style={{ backgroundColor: TEAL }} />
          <div className="size-2 rounded-full mx-1" style={{ backgroundColor: TEAL }} />
          <div className="h-px w-10 opacity-40" style={{ backgroundColor: TEAL }} />
        </div>
      </div>

      {/* Griglia prodotti */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {featuredProducts.items.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-2">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-2 font-semibold hover:opacity-90 transition-opacity"
          style={{ borderColor: TEAL, color: TEAL }}
        >
          <Link href="/shop">
            Vedi tutti i prodotti <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>

    </div>
  );
}

// ─── CATEGORIES GRID ─────────────────────────────────────────────────────────
async function CategoriesGrid() {
  const wixClient = await getWixServerClient();
  const allCollections = await getCollections(wixClient);
  const displayed = allCollections.slice(0, 6);
  if (!displayed.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {displayed.map((col, i) => {
        const { icon: Icon, useTeal } = CATEGORY_CONFIG[i % CATEGORY_CONFIG.length];
        const accentColor = useTeal ? TEAL : PINK;
        const accentBg = useTeal ? "rgba(1,182,216,0.10)" : "rgba(235,130,165,0.13)";

        return (
          <Link
            key={col._id}
            href={`/collections/${col.slug}`}
            className="group relative flex flex-col gap-4 p-6
              bg-white rounded-xl
              border border-border/40 hover:border-transparent
              shadow-sm hover:shadow-xl hover:-translate-y-1.5
              overflow-hidden transition-all duration-300"
          >
            {/* Glow decorativo in background all'hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
              style={{ background: `radial-gradient(ellipse at top left, ${accentBg} 0%, transparent 70%)` }}
            />

            {/* Barra colorata in fondo */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              style={{ backgroundColor: accentColor }}
            />

            {/* Icona in cerchio colorato */}
            <div
              className="relative flex items-center justify-center size-11 rounded-full
                transition-transform duration-300 group-hover:scale-110 shrink-0"
              style={{ backgroundColor: accentBg, color: accentColor }}
            >
              <Icon className="size-5" strokeWidth={1.8} />
            </div>

            {/* Nome + linea accent */}
            <div className="relative space-y-2">
              <h3 className="font-extrabold text-base leading-snug tracking-tight">
                {col.name}
              </h3>
              {/* Linea corta colorata sotto il nome */}
              <div
                className="h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: accentColor }}
              />
            </div>

            {/* "Esplora" + freccia */}
            <div className="relative flex items-center gap-1.5 mt-auto
              opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-200">
              <span className="text-xs font-semibold" style={{ color: accentColor }}>
                Esplora
              </span>
              <ArrowRight className="size-3" style={{ color: accentColor }} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// ─── OFFERINGS ───────────────────────────────────────────────────────────────
function OfferingsGrid() {
  const services = [
    {
      icon: <ShoppingBag className="size-5" />,
      title: "Attrezzature Professionali",
      desc: "Stampi, coloranti, strumenti e tutto il necessario per il cake design. Una selezione di qualità professionale per principianti ed esperte.",
      teal: false,
    },
    {
      icon: <Sparkles className="size-5" />,
      title: "Decorazioni & Coloranti",
      desc: "Coloranti in gel e polvere, sprinkles, perline, glitter alimentari e spray perlati. Tutto ciò che serve per quel tocco di magia in più.",
      teal: true,
    },
    {
      icon: <Phone className="size-5" />,
      title: "Consulenza Personalizzata",
      desc: "Non sai da dove cominciare? Il nostro team ti guida nella scelta dei prodotti giusti per le tue creazioni.",
      teal: false,
    },
  ];

  return (
    <div className="mt-12 space-y-5">

      {/* Tre card servizi */}
      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <div
            key={i}
            className="group bg-white border border-border/40 p-8 space-y-5
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition-all duration-300 cursor-default"
            style={{ borderTop: `3px solid ${s.teal ? TEAL : PINK}` }}
          >
            {/* Icona */}
            <div
              className="flex items-center justify-center size-11 rounded-full transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: s.teal ? "rgba(1,182,216,0.12)" : "rgba(235,130,165,0.15)",
                color: s.teal ? TEAL : PINK,
              }}
            >
              {s.icon}
            </div>
            <h3 className="font-bold text-base tracking-tight">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Card cialde in evidenza */}
      <div
        className="bg-white border border-border/40 shadow-sm hover:shadow-xl
          transition-all duration-300 p-8 md:p-10 overflow-hidden relative"
        style={{ borderLeft: `4px solid ${TEAL}` }}
      >
        {/* Watermark teal in background */}
        <div
          className="absolute -right-16 -bottom-16 size-72 rounded-full opacity-5 pointer-events-none"
          style={{ backgroundColor: TEAL }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Testo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center size-11 rounded-full text-white shrink-0"
                style={{ backgroundColor: TEAL }}
              >
                <CakeSlice className="size-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: TEAL }}>
                Servizio esclusivo
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Cialde su Ordinazione</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Vuoi personalizzare le tue torte con foto, loghi o grafiche? Realizziamo cialde
              commestibili su ordinazione, stampate su ostia o carta di zucchero ad alta risoluzione.
              Perfette per compleanni, matrimoni, eventi aziendali e molto altro.
            </p>
          </div>

          {/* Lista bullet */}
          <div className="space-y-0">
            {[
              "Stampa su ostia o carta di zucchero",
              "Alta risoluzione e colori fedeli",
              "Disponibili in diverse misure",
              "Consegna rapida in tutta Italia",
              "Ideale per ogni tipo di occasione",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 py-3 border-b border-border/40 last:border-0"
              >
                <div
                  className="size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: TEAL }}
                />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
            <div className="pt-5">
              <Button
                asChild
                size="default"
                className="text-white font-semibold shadow-md"
                style={{ backgroundColor: TEAL }}
              >
                <Link href="/shop">
                  Richiedi informazioni <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

// ─── CHI SIAMO ───────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Immagine */}
          <div className="relative h-80 md:h-[28rem] overflow-hidden order-last md:order-first">
            <Image
              src={aboutImg}
              alt="Strumenti e materiali per cake design - Zucchero Mania"
              fill
              className="object-cover"
            />
            {/* Cornicetta decorativa teal */}
            <div
              className="absolute inset-4 pointer-events-none"
              style={{ border: `2px solid rgba(1,182,216,0.45)` }}
            />
            {/* Angolino rosa */}
            <div className="absolute bottom-4 right-4 size-8 pointer-events-none"
              style={{ borderBottom: `2px solid ${PINK}`, borderRight: `2px solid ${PINK}` }}
            />
          </div>

          {/* Testo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: TEAL }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: TEAL }}>
                ✦ La nostra storia ✦
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight leading-snug">
              Nati dalla passione<br />per il cake design
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Zucchero Mania nasce a Reggio Emilia dalla passione per l&apos;arte della
              decorazione. Siamo un punto di riferimento per chi ama creare dolci unici e
              sorprendenti, offrendo strumenti, stampi e ingredienti di alta qualità.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Che tu sia una professionista della pasticceria o una creativa del fine
              settimana, troverai da noi tutto ciò che ti serve per trasformare ogni torta
              in un&apos;opera d&apos;arte.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <Button asChild>
                <Link href="/shop">
                  Visita il negozio <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Link
                href="/shop"
                className="text-sm font-semibold flex items-center gap-1 hover:underline"
                style={{ color: TEAL }}
              >
                Contattaci <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
function SectionHeader({
  tag,
  title,
  subtitle,
  href,
  teal,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
  href?: string;
  teal?: boolean;
}) {
  const accentColor = teal ? TEAL : PINK;
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-2">
        {tag && (
          <div className="flex items-center gap-2.5">
            <div className="h-px w-7" style={{ backgroundColor: accentColor }} />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: accentColor }}
            >
              {tag}
            </span>
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground max-w-md">{subtitle}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1.5 text-sm font-semibold shrink-0 hover:underline"
          style={{ color: accentColor }}
        >
          Vedi tutti <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

// ─── LOADING SKELETONS ────────────────────────────────────────────────────────
function LoadingSkeletonFeatured() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-2 w-32" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-0">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-10 w-full mt-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LoadingSkeletonCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-[140px] w-full rounded-xl" />
      ))}
    </div>
  );
}
