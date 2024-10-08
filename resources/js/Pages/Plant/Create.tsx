import InputError from "@/Components/InputError";
import ImageUpload from "@/Components/Plant/ImageUpload";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { create } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create() {
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("plant.store"));
    };

    const { data, setData, post, processing, errors } = useForm({
        nick_name: "",
        picture: null,
    });

    const setPicture = (e: any) => {
        setData((prev) => {
            return { ...prev, picture: e.target.files[0] };
        });
    };

    const setNickname = (e: any) => {
        setData((prev) => {
            return { ...prev, nick_name: e.target.value };
        });
    };

    return (
        <BaseLayout>
            <form onSubmit={submit} className="grid h-full content-between">
                <div className="h-[40rem] text-center">
                    <ImageUpload
                        data={data}
                        errors={errors}
                        setPicture={setPicture}
                    />
                    <TextInput
                        id="nick_name"
                        name="nick_name"
                        placeholder="Nick Name"
                        onChange={setNickname}
                    />
                    <InputError message={errors.nick_name} />
                </div>
                <div className="flex justify-end gap-2 max-h-10">
                    <PrimaryButton onClick={create}>index</PrimaryButton>
                    <PrimaryButton disabled={processing}>store</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
