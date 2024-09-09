import { ReactNode } from "react";

interface PropType {
    children: ReactNode;
    className: string;
}

export default function ActionBar({ children, className = "" }: PropType) {
    return (
        <div id="ActionBar" className={className}>
            {children}
        </div>
    );
}
