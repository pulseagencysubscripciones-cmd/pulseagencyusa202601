"use client";

import DesktopLayout from "@/components/desktop/DesktopLayout";
import MobileLayout from "@/components/mobile/MobileLayout";
import { useDeviceType } from "@/hooks/useDeviceType";

export default function Page() {
  const deviceType = useDeviceType();

  if (deviceType === null) {
      return <div className="min-h-screen bg-[#070A14]" />;
  }

  return (
    <>
      {deviceType === "mobile" ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </>
  );
}
