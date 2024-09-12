import PrimaryButton from "@/Components/PrimaryButton";
import { show, watered_at } from "@/Helper/Plant";
import { Plant } from "@/types/plant";
import { useContext, useEffect, useState } from "react";
import { WaterContext } from "./Index";

interface PropType {
    plant: Plant;
}

export default function Element({ plant }: PropType) {
    const water = useContext(WaterContext);
    const [selected, setSelected] = useState(false);

    useEffect(() =>
        // checks: is selected
        setSelected(Array.from(water.collection).includes(plant.id))
    );

    return (
        <div id="Element" className={selected ? "bg-green-500" : ""}>
            <p>Nickname: {plant.nick_name}</p>
            {plant.botanical && <p>Botanical: {plant.botanical}</p>}
            <p>Watered_at: {watered_at(plant)}</p>
            <PrimaryButton onClick={() => water.toggle(plant.id)}>
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
