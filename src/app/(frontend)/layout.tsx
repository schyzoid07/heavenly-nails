import "@/styles/global.css"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"

const bellabooFont = localFont({
  src: "../bellaboo.ttf",
})

export const metadata = {
  title: "Heavenly Nails",
  description: "sitio web para el negocio de uñas heavenly Nails",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(bellabooFont.className, "scroll-smooth")}
    >
      <body className={"font-sans antialiased"}>{children}</body>
    </html>
  )
}
