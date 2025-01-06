import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Service } from '@/payload-types'
import Image from 'next/image'
interface Props {
  service: Service
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="size-40 bg-purple-200 rounded-full mb-4 overflow-hidden">
        {service.url && service.width && service.height ? (
          <Image
            src={service.url}
            alt={service.alt}
            width={service.width}
            height={service.height}
          />
        ) : null}
      </div>
      <h3 className="font-bold">{service.title}</h3>
      <p className="text-sm">{service.description}</p>
      <Link href="#contactUs">
        <Button className="bg-purple-900 rounded-full mt-4" size="sm">
          Contacto
        </Button>
      </Link>
    </div>
  )
}
