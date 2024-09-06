import { Plant } from "@/types/plant";
import PrimaryButton from "../PrimaryButton";
import { show } from "@/Helper/Plant";

interface PropType {
    plant: Plant;
}

export default function Element({ plant }: PropType) {
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
