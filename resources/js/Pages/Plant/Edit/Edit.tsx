import ActionBar from "@/Components/ActionBar";
import ImageUpload from "@/Components/ImageUpload";
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
                botanical: data.botanical,
                picture: data.picture,
                forceFormData: true,
                _method: "patch",
            }
        );
    };

    const { data, setData, processing, errors } = useForm({
        nick_name: plant.nick_name,
        botanical: plant.botanical,
        picture: plant.picture,
    });

    const setPicture = (e: any) => {
        setData((prev) => {
            return { ...prev, picture: e.target.files[0] };
        });
    };

    const updateForm = (e: any) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <BaseLayout>
            <form onSubmit={submit}>
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
                    onChange={updateForm}
                />
                <TextInput
                    id="botanical"
                    name="botanical"
                    placeholder="Botanical"
                    value={data.botanical}
                    onChange={updateForm}
                />
                <InputError message={errors.nick_name} />
                <ActionBar>
                    <PrimaryButton type="button" onClick={() => show(plant)}>
                        cancel
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>update</PrimaryButton>
                </ActionBar>
            </form>
        </BaseLayout>
    );
}
