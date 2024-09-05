import PlantList from "@/Components/Plant/PlantList";
import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Index({ plants }: { plants: Plant[] }) {
    return (
        <BaseLayout>
            <div className="grid content-between h-full">
                <div className="grid gap-2">
                    {plants && <PlantList plants={plants} />}
                </div>
                <div className="justify-self-end max-h-10">
                    <PrimaryButton>
                        <Link href={route("plant.create")}>create</Link>
                    </PrimaryButton>
                </div>
            </div>
        </BaseLayout>
    );
}
