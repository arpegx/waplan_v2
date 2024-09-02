import PrimaryButton from "@/Components/PrimaryButton";
import { picture } from "@/Components/Plant/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link, router } from "@inertiajs/react";

export default function Show(plant: Plant) {
    const destroy = () => {
        router.delete(route("plant.destroy", plant.id));
    };

    return (
        <BaseLayout>
            <div className="h-full grid content-between">
                <div>
                    <h1>SHOW</h1>
                    <p>Nick Name: {plant.nick_name}</p>
                    <img src={picture(plant)} alt="plant.picture" />
                </div>
                <div className="flex justify-end gap-2">
                    <PrimaryButton>
                        <Link href={route("plant.index")}>index</Link>
                    </PrimaryButton>
                    <PrimaryButton>
                        <Link href={route("plant.edit", [{ id: plant.id }])}>
                            edit
                        </Link>
                    </PrimaryButton>
                    <PrimaryButton onClick={destroy}>destroy</PrimaryButton>
                </div>
            </div>
        </BaseLayout>
    );
}
