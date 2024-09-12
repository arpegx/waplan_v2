import { Plant } from "@/types/plant";
import Element from "./Element";

interface PropType {
    plants: Plant[];
}

export default function List({ plants }: PropType) {
    return (
        <div id="List">
            {plants.map((plant: Plant) => (
                <Element plant={plant} key={plant.id} />
            ))}
        </div>
    );
}
