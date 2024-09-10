import ActionBar from "@/Components/ActionBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { create } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { useForm } from "@inertiajs/react";
import { createContext, FormEventHandler, useState } from "react";
import List from "./List";

interface PropType {
    plants: Plant[];
}

export const SelectionContext = createContext<any>({
    id: undefined,
});

export default function Index({ plants }: PropType) {
    const [selection, setSelection] = useState<Set<Number>>(new Set());

    const { data, setData, post, processing, errors } = useForm({
        plants: [],
    });

    const select = (e: number) => {
        selection.has(e)
            ? setSelection(selection.difference(new Set([e])))
            : selection.add(e);
        setData({ plants: Array.from(selection) as never[] });
    };

    const water: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("plant.water"));
    };

    return (
        <BaseLayout>
            <div className="grid content-between h-full">
                <SelectionContext.Provider
                    value={{ select, selection }}
                    className="grid gap-2"
                >
                    {plants && <List plants={plants} />}
                </SelectionContext.Provider>
                <ActionBar className="justify-self-end max-h-10">
                    <PrimaryButton onClick={create}>create</PrimaryButton>
                </ActionBar>
                <form onSubmit={water}>
                    <PrimaryButton>water</PrimaryButton>
                </form>
            </div>
        </BaseLayout>
    );
}
