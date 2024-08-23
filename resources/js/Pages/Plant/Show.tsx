import PrimaryButton from "@/Components/PrimaryButton";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";

export default function Show(plant: Plant) {
    return (
        <BaseLayout>
            <div className="h-full grid content-between">
                <div>
                    <h1>SHOW</h1>
                    <p>Nick Name: {plant.nick_name}</p>
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
                </div>
            </div>
        </BaseLayout>
    );
}
