import PrimaryButton from "@/Components/PrimaryButton";
import { show, watered_at } from "@/Helper/Plant";
import { Plant } from "@/types/plant";
import { useContext, useState } from "react";
import { SelectionContext } from "./Index";

interface PropType {
    plant: Plant;
}

export default function Element({ plant }: PropType) {
    const [selected, setSelected] = useState(false);
    const select = useContext(SelectionContext);
    const toggle = () => {
        select.select(plant.id);
        setSelected(Array.from(select.selection).includes(plant.id));
    };
    return (
        <div
            className={`grid grid-cols-2 max-h-10 ${
                selected ? "bg-green-500" : ""
            }`}
        >
            <p>Nickname: {plant.nick_name}</p>
            <p>Watered_at: {watered_at(plant)}</p>
            <PrimaryButton onClick={toggle}>select</PrimaryButton>
            <PrimaryButton
                onClick={() => show(plant)}
                className="w-fit justify-self-end"
            >
                show
            </PrimaryButton>
        </div>
    );
}
