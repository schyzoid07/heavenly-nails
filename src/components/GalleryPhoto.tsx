import Image from "next/image"

import { Gallery } from "@/payload-types"

interface Props {
  gallery: Gallery
}

export default function GalleryPhoto({ gallery }: Props) {
  return (
    <div className="group flex aspect-square w-full cursor-pointer overflow-hidden bg-purple-200">
      <div className="relative h-full w-full transition-all group-hover:scale-125">
        {gallery.url && gallery.height && gallery.width ? (
          <Image src={gallery.url} alt={gallery.alt} fill className="object-cover"></Image>
        ) : null}
      </div>
    </div>
  )
}
