import { Plant } from "@/types/plant";

export function picture(plant: Plant){
    return import.meta.env.VITE_APP_URL 
        + ":" + import.meta.env.VITE_APP_PORT 
        + "/storage/images/plant/" 
        + plant.picture.split("/").pop();
}