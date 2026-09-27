import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Damper Sequence Optimizer",
  description: "Otimização industrial da sequência de produção e buffers intermediários.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
