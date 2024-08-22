import BaseLayout from "@/Layouts/BaseLayout";

interface Plant {
    id: number;
    nick_name: string;
}

export default function Show(plant: Plant) {
    return (
        <BaseLayout>
            <h1>SHOW</h1>
            <p>{plant.nick_name}</p>
        </BaseLayout>
    );
}
