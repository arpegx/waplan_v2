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
                    <Link
                        href={route("plant.index")}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        index
                    </Link>
                    <PrimaryButton disabled={processing}>store</PrimaryButton>
                </div>
            </form>
        </BaseLayout>
    );
}
