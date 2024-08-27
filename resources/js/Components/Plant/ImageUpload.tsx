import { useRef } from "react";
import InputError from "../InputError";

export default function ImageUpload({ data, errors, updateData }: any) {
    const uploadInput = useRef(null);
    const imagePreview = useRef(null);

    const triggerUpload = () => {
        uploadInput.current.value = "";
        uploadInput.current?.click();
    };

    return (
        <div className="ImageUpload">
            <input
                ref={uploadInput}
                type="file"
                accept="extensions:jpg,png"
                name="picture"
                onChange={updateData}
                style={{ display: "none" }}
            />
            {data.picture ? (
                <img
                    ref={imagePreview}
                    className="imagePreview"
                    src={URL.createObjectURL(data.picture)}
                    alt="File uploaded"
                    onLoad={() => URL.revokeObjectURL(imagePreview.src)}
                    onClick={triggerUpload}
                />
            ) : (
                <button
                    onClick={triggerUpload}
                    type="button"
                    className="btn_file_upload"
                ></button>
            )}
            <InputError message={errors.picture} />
        </div>
    );
}
