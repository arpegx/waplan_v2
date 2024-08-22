import PlantList from "@/Components/Plant/PlantList";
import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Index(plants: Array<Plant>[]) {
    return (
        <BaseLayout>
            {plants && <PlantList plants={plants} />}
            <PrimaryButton className="justify-self-end">
                <Link href={route("plant.create")}>create</Link>
            </PrimaryButton>
        </BaseLayout>
    );
}
