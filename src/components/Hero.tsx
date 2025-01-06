import Link from "next/link"
import { Sparkle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import MobileNav from "./MobileNav"
import Nails from "@/assets/nails2.png"

export default function Hero() {
  return (
    <header
      id="home"
      className="star-pattern relative w-full overflow-hidden bg-purple-200 text-purple-900"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex w-full items-center justify-between px-2 pt-4">
          <h1 className="font-title text-2xl">Heavenly Nails</h1>

          <nav className="hidden gap-4 md:flex">
            <Link href="#home" className="text-sm uppercase hover:underline">
              Inicio
            </Link>
            <Link href="#services" className="text-sm uppercase hover:underline">
              Servicios
            </Link>
            <Link href="#aboutUs" className="text-sm uppercase hover:underline">
              Nosotros
            </Link>
            <Link href="#gallery" className="text-sm uppercase hover:underline">
              Galeria
            </Link>
            <Link href="#contactUs" className="text-sm uppercase hover:underline">
              Contacto
            </Link>
          </nav>

          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </div>
        <div className="flex min-h-[400px] w-full items-center justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <Sparkle className="size-10" />
            <h2 className="text-center font-title text-4xl font-bold text-purple-900">
              Arte Creativo y Atractivo de Uñas
            </h2>
            <p className="mb-4">Diseños parat ti</p>
            <Link href="#contactUs">
              <Button className="rounded-full bg-purple-900">Contacto</Button>
            </Link>
          </div>
          <div className="hidden items-center justify-center p-2 md:flex">
            <div className="relative aspect-square w-[300px] overflow-hidden rounded-full">
              <Image src={Nails} alt="Logo" fill />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
