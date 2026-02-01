"use client";

import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "desktop" | null;

export function useDeviceType() {
    const [deviceType, setDeviceType] = useState<DeviceType>(null);

    useEffect(() => {
        const checkDeviceType = () => {
            if (window.innerWidth < 1024) {
                setDeviceType("mobile");
            } else {
                setDeviceType("desktop");
            }
        };

        checkDeviceType();
        window.addEventListener("resize", checkDeviceType);

        return () => window.removeEventListener("resize", checkDeviceType);
    }, []);

    return deviceType;
}
