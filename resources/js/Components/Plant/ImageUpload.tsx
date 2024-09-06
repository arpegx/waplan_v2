import { picture } from "@/Helper/Plant";
import { useRef } from "react";
import InputError from "../InputError";
import { Plant } from "@/types/plant";

interface PropType {
    data: any;
    errors: Partial<Plant>;
    setPicture: any;
}

export default function ImageUpload({ data, errors, setPicture }: PropType) {
    const uploadInput = useRef(
        document.getElementById("uploadInput") as HTMLInputElement
    );
    const imagePreview = useRef(
        document.getElementById("imagePreview") as HTMLImageElement
    );

    const triggerUpload = () => {
        uploadInput.current.value = "";
        uploadInput.current.click();
    };

    return (
        <div className="ImageUpload">
            <input
                id="uploadInput"
                ref={uploadInput}
                onChange={setPicture}
                type="file"
                accept="extensions:jpg,png"
                name="picture"
            />
            {data.picture ? (
                <img
                    id="imagePreview"
                    ref={imagePreview}
                    onLoad={() => URL.revokeObjectURL(imagePreview.current.src)}
                    onClick={triggerUpload}
                    src={
                        typeof data.picture === "string"
                            ? picture(data)
                            : URL.createObjectURL(data.picture)
                    }
                    alt="File uploaded"
                    className="imagePreview"
                />
            ) : (
                <button
                    onClick={triggerUpload}
                    type="button"
                    title="Upload image"
                    className="btn_file_upload"
                ></button>
            )}
            <InputError message={errors.picture} />
        </div>
    );
}
