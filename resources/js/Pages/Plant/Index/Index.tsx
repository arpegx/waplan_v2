import ActionBar from "@/Components/ActionBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { create } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import List from "./List";

interface PropType {
    plants: Plant[];
}

export default function Index({ plants }: PropType) {
    return (
        <BaseLayout>
            <div className="grid content-between h-full">
                <div className="grid gap-2">
                    {plants && <List plants={plants} />}
                </div>
                <ActionBar className="justify-self-end max-h-10">
                    <PrimaryButton onClick={create}>create</PrimaryButton>
                </ActionBar>
            </div>
        </BaseLayout>
    );
}
