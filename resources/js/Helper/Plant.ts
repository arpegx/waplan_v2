import { Plant } from "@/types/plant";

export function plant_picture(plant: Plant){
    return "../storage/images/plant/" + plant.picture.split("/").pop();
}