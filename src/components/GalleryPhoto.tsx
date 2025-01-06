import Image from 'next/image'

import { Gallery } from '@/payload-types'

interface Props {
  gallery: Gallery
}

export default function GalleryPhoto({ gallery }: Props) {
  return (
    <div className="flex w-full aspect-square bg-purple-200 group overflow-hidden cursor-pointer">
      <div className="relative w-full h-full group-hover:scale-125 transition-all">
        {gallery.url && gallery.height && gallery.width ? (
          <Image src={gallery.url} alt={gallery.alt} fill className="object-cover"></Image>
        ) : null}
      </div>
    </div>
  )
}
