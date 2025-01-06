import ServiceCard from "./ServiceCard"
import { getPayload } from "payload"
import configPromise from "@payload-config"

export default async function Services() {
  const payload = await getPayload({ config: configPromise })

  const { docs: services } = await payload.find({
    collection: "services",
  })

  return (
    <section id="services" className="container mx-auto max-w-6xl px-4 py-20">
      <h2 className="mb-12 text-center font-title text-4xl font-bold text-purple-950">Servicios</h2>
      <div className="grid w-full grid-cols-[repeat(auto-fill,271px)] place-content-center gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex size-40 items-center justify-center overflow-hidden rounded-full bg-purple-200">
            <span className="text-sm text-purple-800">Proximamente...</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex size-40 items-center justify-center overflow-hidden rounded-full bg-purple-200">
            <span className="text-sm text-purple-800">Proximamente...</span>
          </div>
        </div>
      </div>
    </section>
  )
}
