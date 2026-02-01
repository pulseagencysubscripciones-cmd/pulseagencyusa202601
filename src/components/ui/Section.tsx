import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className = "", id }: Props) {
    return (
        <section id={id} className={`relative ${className}`}>
            {/* The container padding is now handled by the parent page.tsx to ensure perfect global alignment */}
            {/* We only add local structural styles here if needed */}
            {children}
        </section>
    );
}
