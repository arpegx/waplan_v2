import InputError from "@/Components/InputError";
import ImageUpload from "@/Components/Plant/ImageUpload";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { show } from "@/Helper/Plant";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Edit(plant: Plant) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nick_name: plant.nick_name,
        picture: plant.picture,
    });

    function updateData(e: any) {
        setData((prev) => {
            return { ...prev, picture: e.target.files[0] };
        });
    }
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

    return (
        <BaseLayout>
            <form onSubmit={submit} className="grid h-full content-between">
                <h1 className="max-h-10">Edit</h1>
                <div className="h-[40rem] text-center">
                    <ImageUpload
                        data={data}
                        errors={errors}
                        updateData={updateData}
                    />
                    <TextInput
                        id="nick_name"
                        name="nick_name"
                        placeholder="Nick Name"
                        value={data.nick_name}
                        onChange={(e) =>
                            setData((prev) => {
                                return { ...prev, nick_name: e.target.value };
                            })
                        }
                    />
                    <InputError message={errors.nick_name} />
                </div>
                <div className="flex justify-end gap-2 max-h-10">
                    <PrimaryButton onClick={() => show(plant)}>
                        cancel
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>update</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
