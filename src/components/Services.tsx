import ServiceCard from './ServiceCard'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Services() {
  const payload = await getPayload({ config: configPromise })

  const { docs: services } = await payload.find({
    collection: 'services',
  })

  return (
    <section id="services" className="container mx-auto py-20 max-w-6xl px-4">
      <h2 className="text-center font-title text-purple-950 text-4xl font-bold mb-12">Servicios</h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,271px)] w-full place-content-center">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        <div className="flex flex-col items-center text-center">
          <div className="size-40 bg-purple-200 rounded-full mb-4 overflow-hidden flex items-center justify-center">
            <span className="text-sm text-purple-800">Proximamente...</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="size-40 bg-purple-200 rounded-full mb-4 overflow-hidden flex items-center justify-center">
            <span className="text-sm text-purple-800">Proximamente...</span>
          </div>
        </div>
      </div>
    </section>
  )
}
