import { Label } from "@/components/ui/label";
import { checkInStock, cn } from "@/lib/utils";
import { products } from "@wix/stores";

interface ProductOptionsProps {
    product: products.Product;
    selectedOptions: Record<string, string>;
    setSelectedOption: (option: Record<string, string>) => void;
}

export default function ProductOptions({product, selectedOptions, setSelectedOption}: ProductOptionsProps) {
    return (
        <div className="space-y-2.5">
            {product.productOptions?.map(option => (
                <fieldset key={option.name} className="space-y-2.5">
                    <legend>
                        <Label asChild>
                            <span>{option.name}</span>
                            
                        </Label>
                    </legend>
                    <div className="flex flex-wrap items-center gap-1.5">
                        {option.choices?.map(choise => (
                            <div key={choise.description}>
                                <input 
                                    type="radio" 
                                    id={choise.description} 
                                    name={option.name} 
                                    value={choise.description}
                                    className="peer hidden"
                                    checked={selectedOptions[option.name || ""] === choise.description}
                                    onChange={() => setSelectedOption({
                                        ...selectedOptions,
                                        [option.name || ""]: choise.description || ""
                                    })}
                                />
                                <Label
                                    htmlFor={choise.description}
                                    className={cn("flex items-center justify-center min-w-14 cursor-pointer gap-1.5 border p-2 peer-checked:border-primary",
                                        !checkInStock(product, {
                                            ...selectedOptions,
                                            [option.name || ""]: choise.description || "",
                                        }) && "opacity-50"
                                    )}
                                >
                                    {option.optionType === products.OptionType.color && (
                                        <span
                                            className="size-4 rounded-full border"
                                            style={{
                                                backgroundColor: choise.value
                                            }}
                                        />
                                    )}
                                    <span>{choise.description}</span>
                                </Label>
                            </div>
                        )) }
                    </div>
                </fieldset>
            ))}
        </div>
    );
}