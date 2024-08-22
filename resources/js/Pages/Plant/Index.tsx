import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Index(plants: Array<Plant>[]) {
    let list = plants[0].map((plant: Plant, index: number) => (
        <p key={index}>{plant.nick_name}</p>
    ));
    return (
        <BaseLayout>
            {plants && list}
            <PrimaryButton>
                <Link href={route("plant.create")}>create</Link>
            </PrimaryButton>
        </BaseLayout>
    );
}
