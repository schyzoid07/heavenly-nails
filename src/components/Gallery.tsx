import GalleryPhoto from "@/components/GalleryPhoto"
import { getPayload } from "payload"
import configPromise from "@payload-config"

export default async function Gallery() {
  const payload = await getPayload({ config: configPromise })
  const { docs: gallery } = await payload.find({
    collection: "gallery",
    limit: 8,
  })

  return (
    <section id="gallery" className="container mx-auto max-w-6xl py-20">
      <h2 className="mb-12 text-center font-title text-4xl font-bold text-purple-950">Galeria</h2>
      <div className="grid grid-cols-2 gap-2 overflow-hidden md:grid-cols-4">
        {gallery.map((photo) => (
          <GalleryPhoto key={photo.id} gallery={photo} />
        ))}
      </div>
    </section>
  )
}
