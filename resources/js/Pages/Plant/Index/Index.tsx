import ActionBar from "@/Components/ActionBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { create } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { createContext, useState } from "react";
import List from "./List";

interface PropType {
    plants: Plant[];
}

export const SelectionContext = createContext<any>({
    id: undefined,
});

export default function Index({ plants }: PropType) {
    const [selection, setSelection] = useState([]);
    const select = (e: never) => {
        selection.push(e);
        console.log(selection);
    };

    const [water, setWater] = useState([]);
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
            </div>
        </BaseLayout>
    );
}
