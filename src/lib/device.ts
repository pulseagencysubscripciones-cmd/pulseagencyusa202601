import { headers } from "next/headers";

export function getDeviceType(): "mobile" | "desktop" {
    // Use a try-catch block or check availability because headers() is dynamic
    // Next.js 15 might require awaiting headers() in some contexts, 
    // but for a utility used in a Server Component, checking the user-agent is standard.
    // In Next.js 15, headers is an async function in layouts/pages but we can access it.

    // NOTE: In Next.js 15, headers() returns a ReadonlyHeaders or Promise.
    // We will assume usage in an async Server Component page.

    return "desktop"; // Placeholder helper if we can't extract it easily here without context
}

export const isMobileDevice = (userAgent: string): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};
