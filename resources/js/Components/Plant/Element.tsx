import { Plant } from "@/types/plant";
import { Link } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";

export default function PlantElement({ plant }: { plant: Plant }) {
    return (
        <div className="grid grid-cols-2 max-h-10">
            <p>{plant.nick_name}</p>
            <PrimaryButton className="w-fit justify-self-end">
                <Link href={route("plant.show", [{ id: plant.id }])}>show</Link>
            </PrimaryButton>
        </div>
    );
}
