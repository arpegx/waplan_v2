import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import BaseLayout from "@/Layouts/BaseLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useRef } from "react";

export default function Create() {
    const { data, setData, post, progress, processing, errors, reset } =
        useForm({
            nick_name: "",
            picture: null,
        });

    const uploadInput = useRef();
    const imagePreview = useRef();

    const triggerUpload = () => {
        uploadInput.current.value = "";
        uploadInput.current.click();
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("plant.store"));
    };

    return (
        <BaseLayout>
            <form onSubmit={submit} className="grid h-full content-between">
                <h1 className="max-h-10">Create</h1>
                <div className="h-[40rem] text-center">
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
                        onChange={(e) => setData("picture", e.target.files[0])}
                        style={{ display: "none" }}
                    />
                    {!data.picture && (
                        <button
                            onClick={triggerUpload}
                            type="button"
                            className="fileUpload"
                        ></button>
                    )}
                    {/* {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )} */}
                    <InputError message={errors.picture} />
                    <TextInput
                        id="nick_name"
                        name="nick_name"
                        placeholder="Nick Name"
                        onChange={(e) => setData("nick_name", e.target.value)}
                    />
                    <InputError message={errors.nick_name} />
                </div>
                <div className="flex justify-end gap-2 max-h-10">
                    <PrimaryButton>
                        <Link href={route("plant.index")}>index</Link>
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>store</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
