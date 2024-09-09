import PrimaryButton from "@/Components/PrimaryButton";
import { show } from "@/Helper/Plant";
import { Plant } from "@/types/plant";
import { useContext } from "react";
import { SelectionContext } from "./Index";

interface PropType {
    plant: Plant;
}

export default function Element({ plant }: PropType) {
    const select = useContext(SelectionContext);
    console.log(select.selection);
    return (
        <div className={`grid grid-cols-2 max-h-10 `}>
            <p>{plant.nick_name}</p>
            <PrimaryButton onClick={() => select.select(plant.id)}>
                select
            </PrimaryButton>
            <PrimaryButton
                onClick={() => show(plant)}
                className="w-fit justify-self-end"
            >
                show
            </PrimaryButton>
        </div>
    );
}
