export default function Background() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[#070A14]">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

            {/* Main Focal Glow (Top Center) */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-full opacity-[0.25] blur-[100px]"
                style={{ background: "radial-gradient(circle at center, #6366f1 0%, transparent 70%)" }}
            />

            {/* Hero Accent Glow (Left) */}
            <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.15] blur-[120px]"
                style={{ background: "radial-gradient(circle at center, #ff3bbe 0%, transparent 60%)" }}
            />

            {/* Hero Accent Glow (Right) */}
            <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.12] blur-[120px]"
                style={{ background: "radial-gradient(circle at center, #2ee6ff 0%, transparent 60%)" }}
            />

            {/* Lower Accent Glow */}
            <div className="absolute bottom-[20%] left-[-20%] w-[80%] h-[80%] rounded-full opacity-[0.1] blur-[150px]"
                style={{ background: "radial-gradient(circle at center, #b84cff 0%, transparent 60%)" }}
            />

            {/* Dot Grid Layer */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 0.5px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
        </div>
    );
}
