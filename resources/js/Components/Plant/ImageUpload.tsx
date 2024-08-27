import { useRef } from "react";
import InputError from "../InputError";

export default function ImageUpload({ data, errors, updateData }: any) {
    const uploadInput = useRef();
    const imagePreview = useRef();

    const triggerUpload = () => {
        if (uploadInput.current != undefined) {
            uploadInput.current.value = "";
            uploadInput.current.click();
        }
    };

    return (
        <>
            {data.picture && (
                <img
                    ref={imagePreview}
                    className="imagePreview"
                    src={URL.createObjectURL(data.picture)}
                    alt="File uploaded"
                    onLoad={() => URL.revokeObjectURL(imagePreview.src)}
                    onClick={triggerUpload}
                />
            )}
            <input
                ref={uploadInput}
                type="file"
                accept="extensions:jpg,png"
                name="picture"
                onChange={updateData}
                style={{ display: "none" }}
            />
            {!data.picture && (
                <button
                    onClick={triggerUpload}
                    type="button"
                    className="fileUpload"
                ></button>
            )}
            <InputError message={errors.picture} />
        </>
    );
}
