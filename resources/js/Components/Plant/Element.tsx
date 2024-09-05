import { Plant } from "@/types/plant";
import PrimaryButton from "../PrimaryButton";
import { show } from "@/Helper/Plant";

export default function PlantElement({ plant }: { plant: Plant }) {
    return (
        <div className="grid grid-cols-2 max-h-10">
            <p>{plant.nick_name}</p>
            <PrimaryButton
                onClick={() => show(plant)}
                className="w-fit justify-self-end"
            >
                show
            </PrimaryButton>
        </div>
    );
}
