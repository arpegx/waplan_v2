import ActionBar from "@/Components/ActionBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { create } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { useForm } from "@inertiajs/react";
import { createContext, FormEventHandler, useState } from "react";
import List from "./List";

export const WaterContext = createContext<any>({
    toggle: Function,
    collection: Set<Number>,
});

interface PropType {
    plants: Plant[];
}

export default function Index({ plants }: PropType) {
    const { setData, post } = useForm({
        plants: [],
    });

    // manage collection of plants to be watered
    const [collection] = useState<Set<Number>>(new Set());
    const toggle = (plant_id: number) => {
        collection.has(plant_id)
            ? collection.delete(plant_id)
            : collection.add(plant_id);
        setData({ plants: Array.from(collection) as never[] });
    };

    // dispatch water action
    const water: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("plant.water"));
        collection.clear();
    };

    return (
        <BaseLayout>
            <div className="grid content-between h-full">
                <WaterContext.Provider
                    value={{ toggle: toggle, collection: collection }}
                    className="grid gap-2"
                >
                    {plants && <List plants={plants} />}
                </WaterContext.Provider>
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
