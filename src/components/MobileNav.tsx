"use client"

import { ChevronRight } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { useRef } from "react"

export default function MobileNav() {
  const pendingScrollRef = useRef<string | null>(null)

  const handleOnLinkClick = (id: string) => {
    pendingScrollRef.current = id
  }

  const handleOnAnimationEnd = (open: boolean) => {
    if (open) {
      return
    }

    document.documentElement.classList.add("scroll-smooth")

    if (!pendingScrollRef.current) {
      return
    }

    const link = document.createElement("a")
    link.href = `#${pendingScrollRef.current}`
    link.click()

    pendingScrollRef.current = null
  }

  const handleOnOpenChange = (open: boolean) => {
    if (open) {
      document.documentElement.classList.remove("scroll-smooth")
    }
  }

  return (
    <Drawer onOpenChange={handleOnOpenChange} onAnimationEnd={handleOnAnimationEnd}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="hidden">Menu</DrawerTitle>
          <DrawerDescription className="hidden">Secciones del sitio</DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-col gap-4 px-5">
          <DrawerClose asChild>
            <Button variant="ghost" onClick={() => handleOnLinkClick("home")}>
              Inicio
              <ChevronRight className="ml-auto size-4" />
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="ghost" onClick={() => handleOnLinkClick("services")}>
              Servicios
              <ChevronRight className="ml-auto size-4" />
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="ghost" onClick={() => handleOnLinkClick("aboutUs")}>
              Nosotros
              <ChevronRight className="ml-auto size-4" />
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="ghost" onClick={() => handleOnLinkClick("gallery")}>
              Galeria
              <ChevronRight className="ml-auto size-4" />
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="ghost" onClick={() => handleOnLinkClick("contactUs")}>
              Contacto
              <ChevronRight className="ml-auto size-4" />
            </Button>
          </DrawerClose>
        </nav>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="w-full bg-purple-900">Cerrar Menú</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
