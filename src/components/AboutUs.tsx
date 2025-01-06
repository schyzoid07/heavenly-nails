import Image from "next/image"
import Nails from "@/assets/nails2.png"
export default function AboutUs() {
  return (
    <section id="aboutUs" className="star-pattern bg-purple-200">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-center">
          <div className="hidden w-1/2 justify-center md:flex">
            <div className="relative aspect-square w-[300px] overflow-hidden rounded-full">
              <Image src={Nails} alt="Logo" fill />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <h2 className="mb-2 text-center font-title text-4xl font-bold text-purple-950">
              Nosotros
            </h2>
            <p className="text-balance text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorem, eum
              laboriosam aperiam vel corrupti. Nisi voluptas rerum illum aliquid, ea sed id
              reprehenderit dicta eius nobis! Atque, sint doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
