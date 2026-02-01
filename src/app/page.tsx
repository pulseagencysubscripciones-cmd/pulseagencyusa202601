import DesktopLayout from "@/components/desktop/DesktopLayout";
import MobileLayout from "@/components/mobile/MobileLayout";

export const metadata = {
  title: "PULSE AGENCY — Ordena tu marca con precisión estratégica",
  description: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas en 7 días.",
};

export default function Page() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileLayout />
      </div>
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  );
}
