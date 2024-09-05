import PrimaryButton from "@/Components/PrimaryButton";
import { destroy, edit, index, picture } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import styles from "./Plant.module.css";

export default function Show(plant: Plant) {
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
