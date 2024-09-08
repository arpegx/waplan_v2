import ActionBar from "@/Components/ActionBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { destroy, edit, index, picture } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";

interface PropType {
    plant: Plant;
}

export default function Show({ plant }: PropType) {
    return (
        <BaseLayout>
            <div className="PlantShow h-full grid content-between">
                <div>
                    <img
                        className="picture"
                        src={picture(plant)}
                        alt="plant.picture"
                    />
                    <div className="text-center">
                        <p>{plant.nick_name}</p>
                    </div>
                </div>
                <ActionBar className="flex justify-end gap-2">
                    <PrimaryButton onClick={index}>index</PrimaryButton>
                    <PrimaryButton onClick={() => edit(plant)}>
                        edit
                    </PrimaryButton>
                    <PrimaryButton onClick={() => destroy(plant)}>
                        destroy
                    </PrimaryButton>
                </ActionBar>
            </div>
        </BaseLayout>
    );
}
