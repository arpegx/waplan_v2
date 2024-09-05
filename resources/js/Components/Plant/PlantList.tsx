import { Plant } from "@/types/plant";
import PlantElement from "./PlantElement";

interface PlantListProps {
    plants: Plant[];
}

export default function PlantList({ plants }: PlantListProps) {
    return plants.map((plant: Plant, index: number) => (
        <PlantElement plant={plant} key={index} />
    ));
}
