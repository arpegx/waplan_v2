import { Plant } from "@/types/plant";
import { router } from "@inertiajs/react";

/// routes
export const index = () => router.get(route("plant.index"));
export const show = (plant: Plant) => router.get(route("plant.show", plant.id));
export const create = () => router.get(route("plant.create"));
export const edit = (plant: Plant) => router.get(route("plant.edit", plant.id));
export const destroy = (plant: Plant) => {
    router.delete(route("plant.destroy", plant.id));
};

/// model
export function picture(plant: Plant){
    return import.meta.env.VITE_APP_URL 
        + ":" + import.meta.env.VITE_APP_PORT 
        + "/storage/images/plant/" 
        + plant.picture.split("/").pop();
}

export function watered_at(plant: Plant){
    const _watered = new Date(plant.watered_at);
    const watered_at = `${_watered.getDate()}.${
        _watered.getMonth() + 1
    }.${_watered.getFullYear()}`;
    return watered_at;
}