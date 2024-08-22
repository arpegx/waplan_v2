import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import BaseLayout from "@/Layouts/BaseLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nick_name: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("plant.store"));
    };
    return (
        <BaseLayout>
            {/* custom headline */}
            <h1>Create</h1>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="nick_name" value="Nick Name" />
                    <TextInput
                        id="nick_name"
                        name="nick_name"
                        onChange={(e) => setData("nick_name", e.target.value)}
                    />
                    <InputError message={errors.nick_name} />
                </div>
                <div>
                    {/* todo Button */}
                    <PrimaryButton>
                        <Link href={route("plant.index")}>index</Link>
                    </PrimaryButton>
                    <PrimaryButton disabled={processing}>store</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
