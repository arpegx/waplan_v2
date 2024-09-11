import { ReactNode } from "react";

interface PropType {
    children: ReactNode;
    id?: string;
}

export default function BaseLayout({ children, id }: PropType) {
    return (
        <div id="BaseLayout">
            <div id="container">
                <div id="content">
                    <div id={id}>{children}</div>
                </div>
            </div>
        </div>
    );
}
