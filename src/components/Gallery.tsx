import GalleryPhoto from '@/components/GalleryPhoto'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Gallery() {
  const payload = await getPayload({ config: configPromise })
  const { docs: gallery } = await payload.find({
    collection: 'gallery',
    limit: 8,
  })

  return (
    <section id="gallery" className="container mx-auto py-20 max-w-6xl">
      <h2 className="text-center font-title text-purple-950 text-4xl font-bold mb-12">Galeria</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 overflow-hidden">
        {gallery.map((photo) => (
          <GalleryPhoto key={photo.id} gallery={photo} />
        ))}
      </div>
    </section>
  )
}
