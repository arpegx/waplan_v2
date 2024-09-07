import PrimaryButton from "@/Components/PrimaryButton";
import { show } from "@/Helper/Plant";
import { Plant } from "@/types/plant";

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
