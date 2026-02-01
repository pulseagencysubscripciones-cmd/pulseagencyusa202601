import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
    const base =
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";
    const styles =
        variant === "primary"
            ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-black hover:brightness-110 shadow-[0_0_35px_rgba(184,76,255,0.35)]"
            : "bg-white/5 ring-1 ring-white/12 text-white hover:bg-white/10";
    return <a className={`${base} ${styles} ${className}`} {...props} />;
}
