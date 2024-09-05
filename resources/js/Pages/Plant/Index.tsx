import List from "@/Components/Plant/List";
import PrimaryButton from "@/Components/PrimaryButton";
import { create } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";

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
                <div className="justify-self-end max-h-10">
                    <PrimaryButton onClick={create}>create</PrimaryButton>
                </div>
            </div>
        </BaseLayout>
    );
}
