import ActionBar from "@/Components/ActionBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { destroy, edit, index, picture, watered_at } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";

interface PropType {
    plant: Plant;
}

export default function Show({ plant }: PropType) {
    return (
        <BaseLayout id="PlantShow">
            <img id="picture" src={picture(plant)} alt="plant.picture" />
            <p>Nickname: {plant.nick_name}</p>
            <p>Watered_at: {watered_at(plant)}</p>
            <ActionBar>
                <PrimaryButton onClick={index}>index</PrimaryButton>
                <PrimaryButton onClick={() => edit(plant)}>edit</PrimaryButton>
                <PrimaryButton onClick={() => destroy(plant)}>
                    destroy
                </PrimaryButton>
            </ActionBar>
        </BaseLayout>
    );
}
