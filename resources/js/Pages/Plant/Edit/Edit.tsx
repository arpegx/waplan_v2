import ImageUpload from "@/Components/ImageUpload/ImageUpload";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { show } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

interface PropType {
    plant: Plant;
}

export default function Edit({ plant }: PropType) {
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        router.post(
            route("plant.update", [
                {
                    id: plant.id,
                },
            ]),
            {
                nick_name: data.nick_name,
                picture: data.picture,
                forceFormData: true,
                _method: "patch",
            }
        );
    };

    const { data, setData, processing, errors } = useForm({
        nick_name: plant.nick_name,
        picture: plant.picture,
    });

    const setPicture = (e: any) => {
        setData((prev) => {
            return { ...prev, picture: e.target.files[0] };
        });
    };

    const setNickname = (e: any) =>
        setData((prev) => {
            return { ...prev, nick_name: e.target.value };
        });

    return (
        <BaseLayout>
            <form onSubmit={submit} className="grid h-full content-between">
                <h1 className="max-h-10">Edit</h1>
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
                        value={data.nick_name}
                        onChange={setNickname}
                    />
                    <InputError message={errors.nick_name} />
                </div>
                <div className="flex justify-end gap-2 max-h-10">
                    <PrimaryButton type="button" onClick={() => show(plant)}>
                        cancel
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>update</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
