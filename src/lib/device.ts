import { headers } from "next/headers";

export function getDeviceType(): "mobile" | "desktop" {
    // Placeholder helper - defaulting to desktop 


    return "desktop"; // Placeholder helper if we can't extract it easily here without context
}

export const isMobileDevice = (userAgent: string): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};
