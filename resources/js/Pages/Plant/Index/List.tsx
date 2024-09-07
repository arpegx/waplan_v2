import { Plant } from "@/types/plant";
import Element from "./Element";

interface PropType {
    plants: Plant[];
}

export default function List({ plants }: PropType) {
    return plants.map((plant: Plant, index: number) => (
        <Element plant={plant} key={index} />
    ));
}
