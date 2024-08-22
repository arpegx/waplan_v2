import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Show(plant: Plant) {
    return (
        <BaseLayout>
            <h1>SHOW</h1>
            <p>{plant.nick_name}</p>
            <PrimaryButton>
                <Link href={route("plant.index")}>index</Link>
            </PrimaryButton>
            <PrimaryButton>
                <Link href={route("plant.edit", [{ id: plant.id }])}>edit</Link>
            </PrimaryButton>
        </BaseLayout>
    );
}
