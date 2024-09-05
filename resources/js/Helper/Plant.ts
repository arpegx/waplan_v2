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