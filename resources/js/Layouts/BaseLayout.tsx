import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
    return (
        <div className="BaseLayout">
            <div className="BaseContainer">
                <div className="BaseContent">{children}</div>
            </div>
        </div>
    );
}
