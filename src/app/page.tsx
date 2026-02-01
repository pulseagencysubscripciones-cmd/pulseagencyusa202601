import { headers } from "next/headers";
import { isMobileDevice } from "@/lib/device";
import DesktopLayout from "@/components/desktop/DesktopLayout";
import MobileLayout from "@/components/mobile/MobileLayout";

export const metadata = {
  title: "PULSE AGENCY — Ordena tu marca con precisión estratégica",
  description: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas en 7 días.",
};

export default async function Page() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = isMobileDevice(userAgent);

  if (isMobile) {
    return <MobileLayout />;
  }

  return <DesktopLayout />;
}
