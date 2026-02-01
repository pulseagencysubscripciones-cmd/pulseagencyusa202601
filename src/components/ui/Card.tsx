export default function Card({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`rounded-2xl bg-white/5 ring-1 ring-white/10 ${className}`}>
            {children}
        </div>
    );
}
