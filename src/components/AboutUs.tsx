import Image from 'next/image'
import Nails from '@/assets/nails2.png'
export default function AboutUs() {
  return (
    <section id="aboutUs" className="bg-purple-200 star-pattern">
      <div className="container mx-auto py-20 max-w-6xl px-4">
        <div className="flex items-center">
          <div className="hidden w-1/2 md:flex justify-center">
            <div className="w-[300px] aspect-square relative overflow-hidden rounded-full">
              <Image src={Nails} alt="Logo" fill />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-center font-title text-purple-950 text-4xl font-bold mb-2">
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
