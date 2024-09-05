import { Plant } from "@/types/plant";
import PlantElement from "./PlantElement";

export default function PlantList({ plants }: { plants: Plant[] }) {
    return plants.map((plant: Plant, index: number) => (
        <PlantElement plant={plant} key={index} />
    ));
}
