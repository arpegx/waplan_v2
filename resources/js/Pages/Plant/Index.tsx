import PlantElement from "@/Components/Plant/PlantElement";
import PlantList from "@/Components/Plant/PlantList";
import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Index(plants: Array<Plant>[]) {
    return (
        // todo baselayout upshifted
        <BaseLayout>
            {plants && <PlantList plants={plants} />}
            <PrimaryButton>
                <Link href={route("plant.create")}>create</Link>
            </PrimaryButton>
        </BaseLayout>
    );
}
