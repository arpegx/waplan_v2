import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";

export default function Show(plant: Plant) {
    return (
        <BaseLayout>
            <h1>SHOW</h1>
            <p>{plant.nick_name}</p>
        </BaseLayout>
    );
}
