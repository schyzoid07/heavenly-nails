import Link from 'next/link'
import { Sparkle, Menu, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import MobileNav from './MobileNav'
import Nails from '@/assets/nails2.png'

export default function Hero() {
  return (
    <header
      id="home"
      className="bg-purple-200 w-full relative overflow-hidden text-purple-900 star-pattern"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between w-full px-2 pt-4">
          <h1 className="text-2xl font-title">Heavenly Nails</h1>

          <nav className="md:flex gap-4 hidden">
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
        <div className="flex w-full items-center justify-evenly min-h-[400px]">
          <div className="flex flex-col items-center justify-center">
            <Sparkle className="size-10" />
            <h2 className="font-bold text-4xl text-purple-900 font-title text-center">
              Arte Creativo y Atractivo de Uñas
            </h2>
            <p className="mb-4">Diseños parat ti</p>
            <Link href="#contactUs">
              <Button className="bg-purple-900 rounded-full">Contacto</Button>
            </Link>
          </div>
          <div className="md:flex items-center justify-center p-2 hidden">
            <div className="w-[300px] aspect-square relative overflow-hidden rounded-full ">
              <Image src={Nails} alt="Logo" fill />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
