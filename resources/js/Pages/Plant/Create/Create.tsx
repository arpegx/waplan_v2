import ActionBar from "@/Components/ActionBar";
import ImageUpload from "@/Components/ImageUpload";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { index } from "@/Helper/Plant";
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
        watered_at: null,
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
    const setWateredAt = (e: any) => {
        setData((prev) => {
            return { ...prev, watered_at: e.target.value };
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
                    <label htmlFor="watered_at">
                        Watered
                        <input
                            onChange={setWateredAt}
                            type="date"
                            id="watered_at"
                            name="watered_at"
                        />
                    </label>
                    <InputError message={errors.nick_name} />
                </div>
                <ActionBar className="flex justify-end gap-2 max-h-10">
                    <PrimaryButton onClick={index} type="button">
                        index
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>store</PrimaryButton>
                </ActionBar>
            </form>
        </BaseLayout>
    );
}
