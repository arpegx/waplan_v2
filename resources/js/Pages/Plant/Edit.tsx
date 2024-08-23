import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import BaseLayout from "@/Layouts/BaseLayout";
import { Plant } from "@/types/plant";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Edit(plant: Plant) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        nick_name: plant.nick_name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(
            route("plant.update", [
                {
                    id: plant.id,
                },
            ])
        );
    };

    return (
        <BaseLayout>
            <form onSubmit={submit} className="grid h-full content-between">
                <h1 className="max-h-10">Edit</h1>
                <div className="h-[40rem] text-center">
                    <TextInput
                        id="nick_name"
                        name="nick_name"
                        placeholder="Nick Name"
                        value={data.nick_name}
                        onChange={(e) => setData("nick_name", e.target.value)}
                    />
                    <InputError message={errors.nick_name} />
                </div>
                <div className="flex justify-end gap-2 max-h-10">
                    <PrimaryButton>
                        <Link href={route("plant.show", [{ id: plant.id }])}>
                            cancel
                        </Link>
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>update</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
