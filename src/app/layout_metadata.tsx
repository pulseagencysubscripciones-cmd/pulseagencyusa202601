import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "PULSE AGENCY — Ordena tu marca con precisión estratégica",
  description: "Diagnóstico práctico y accionable para ordenar tu marca, tu mensaje y tus métricas en 7 días.",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
