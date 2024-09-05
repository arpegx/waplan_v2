import PrimaryButton from "@/Components/PrimaryButton";
import { picture } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link, router } from "@inertiajs/react";
import styles from "./Plant.module.css";

export default function Show(plant: Plant) {
    const destroy = () => {
        router.delete(route("plant.destroy", plant.id));
    };

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
                    <PrimaryButton>
                        <Link href={route("plant.index")}>index</Link>
                    </PrimaryButton>
                    <PrimaryButton>
                        <Link href={route("plant.edit", plant.id)}>edit</Link>
                    </PrimaryButton>
                    <PrimaryButton onClick={destroy}>destroy</PrimaryButton>
                </div>
            </div>
        </BaseLayout>
    );
}
