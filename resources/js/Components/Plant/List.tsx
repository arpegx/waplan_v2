import { Plant } from "@/types/plant";
import Element from "./Element";

export default function PlantList({ plants }: { plants: Plant[] }) {
    return plants.map((plant: Plant, index: number) => (
        <Element plant={plant} key={index} />
    ));
}
