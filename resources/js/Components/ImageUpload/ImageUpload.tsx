import { picture } from "@/Helper/Plant";
import { Plant } from "@/types/plant";
import { useRef } from "react";
import InputError from "../InputError";

interface PropType {
    data: any;
    errors: Partial<Plant>;
    setPicture: any;
}

export default function ImageUpload({ data, errors, setPicture }: PropType) {
    // references
    const uploadInput = useRef(
        document.getElementById("uploadInput") as HTMLInputElement
    );
    const imagePreview = useRef(
        document.getElementById("imagePreview") as HTMLImageElement
    );

    // actions
    const triggerUpload = () => {
        uploadInput.current.value = "";
        uploadInput.current.click();
    };

    // image
    let image = undefined;
    switch (true) {
        case typeof data.picture === "string":
            image = picture(data);
            break;
        case data.picture instanceof File:
            image = URL.createObjectURL(data.picture);
            break;
        default:
            image = "";
    }

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
                    src={image}
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
