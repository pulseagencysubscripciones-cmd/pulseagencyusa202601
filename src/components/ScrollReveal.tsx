"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    delay?: number;
    width?: "full" | "auto";
    direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ children, delay = 0, width = "full", direction = "up" }: Props) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    return (
        <div style={{ width: width === "full" ? "100%" : "auto", position: "relative", overflow: "visible" }}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: directions[direction].y,
                    x: directions[direction].x
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
