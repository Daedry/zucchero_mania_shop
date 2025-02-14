import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="bg-secondary py-10 sm:pt-16 lg:pt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:col-span-3 lg:grid-cols-6">
                <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                    <div className="text-2xl font-bold">Zucchero Mania</div>
                    <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                        Via Ettore Petrolini 12, 42122 Reggio Emilia (RE) <br/>
                        P.IVA: 03084830359 <br/>
                        TEL: +39 327 881 3933 <br/>
                        EMAIL: zuccheromania25@gmail.com <br/>
                    </p>

                    <ul className="mt-4 flex items-center space-x-3">
                        <li>
                            <a
                            href="#"
                            title=""
                            className="flex size-7 items-center justify-center rounded-full bg-foreground text-background transition-all duration-200 hover:bg-primary focus:bg-primary"
                            >
                            <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                            </a>
                        </li>

                        <li>
                            <a
                            href="https://www.instagram.com/zuccheromania25/?__pwa=1"
                            title=""
                            className="flex size-7 items-center justify-center rounded-full bg-foreground text-background transition-all duration-200 hover:bg-primary focus:bg-primary"
                            >
                            <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    About us
                    </p>

                    <ul className="mt-6 space-y-4">
                    <li>
                        <a
                        href="#"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Chi siamo{" "}
                        </a>
                    </li>

                    <li>
                        <a
                        href="#"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Pagamenti{" "}
                        </a>
                    </li>

                    <li>
                        <a
                        href="#"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Spedizioni{" "}
                        </a>
                    </li>

                    {/*<li>
                        <a
                        href="#"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Recensioni{" "}
                        </a>
                    </li>*/}
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Informazioni
                    </p>

                    <ul className="mt-6 space-y-4">
                    <li>
                        <a
                        href="#"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Supporto Clienti{" "}
                        </a>
                    </li>

                    <li>
                        <a
                        href="#"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Dettagli di Consegna{" "}
                        </a>
                    </li>

                    <li>
                        <a
                        href="/terms"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Termini e Condizioni{" "}
                        </a>
                    </li>

                    <li>
                        <a
                        href="/privacy-e-cookie-policy"
                        title=""
                        className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                        >
                        {" "}
                        Privacy e Cookie Policy{" "}
                        </a>
                    </li>
                    </ul>
                </div>

                <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {/* Subscribe to newsletter */}
                    Sottoscriviti alla newsletter
                    </p>

                    <form action="#" method="POST" className="mt-6">
                    <div>
                        <label htmlFor="email" className="sr-only">
                        Email
                        </label>
                        <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Inserisci la tua email"
                        className="block w-full"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-6 py-4"
                    >
                        Sottoscriviti
                    </Button>
                    </form>
                </div>
                </div>

                <hr className="mb-10 mt-16" />

                <p className="text-center text-sm text-muted-foreground">
                    @ Copyright {new Date().getFullYear()}, Tutti i Diritti Riservati da Zucchero Mania
                </p>
            </div>
        </footer>
    );
}