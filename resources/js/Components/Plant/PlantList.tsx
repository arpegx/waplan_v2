import { Plant } from "@/types/plant";
import PlantElement from "./PlantElement";

interface PlantListProps {
    plants: Array<Plant>[];
}

export default function PlantList({ plants }: PlantListProps) {
    return plants[0].map((plant: Plant, index: number) => (
        <PlantElement plant={plant} key={index} />
    ));
}
