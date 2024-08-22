import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Index(plants: Array<Plant>[]) {
    const plantList = plants[0].map((plant: Plant, index: number) => (
        <div key={index} className="grid grid-cols-2">
            <p>{plant.nick_name}</p>
            <PrimaryButton className="w-24">
                <Link href={route("plant.show", [{ id: plant.id }])}>show</Link>
            </PrimaryButton>
        </div>
    ));
    return (
        <BaseLayout>
            {plants && plantList}
            <PrimaryButton>
                <Link href={route("plant.create")}>create</Link>
            </PrimaryButton>
        </BaseLayout>
    );
}
