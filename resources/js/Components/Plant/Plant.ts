import { Plant } from "@/types/plant";

export function picture(plant: Plant){
    return "../storage/images/plant/" + plant.picture.split("/").pop();
}