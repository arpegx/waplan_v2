import PrimaryButton from "@/Components/PrimaryButton";
import { destroy, edit, index, picture } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import styles from "./Plant.module.css";
import { Plant } from "@/types/plant";

interface PropType {
    plant: Plant;
}

export default function Show({ plant }: PropType) {
    return (
        <BaseLayout>
            <div className="h-full grid content-between">
                <div>
                    <img
                        className={styles.picture}
                        src={picture(plant)}
                        alt="plant.picture"
                    />
                    <div className="text-center">
                        <p>{plant.nick_name}</p>
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <PrimaryButton onClick={index}>index</PrimaryButton>
                    <PrimaryButton onClick={() => edit(plant)}>
                        edit
                    </PrimaryButton>
                    <PrimaryButton onClick={() => destroy(plant)}>
                        destroy
                    </PrimaryButton>
                </div>
            </div>
        </BaseLayout>
    );
}
