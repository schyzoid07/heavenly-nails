import ContactInfoCard from "@/components/ContactInfoCard"
import { Mail, Phone, MapPinned, Clock5, Instagram } from "lucide-react"

export default async function ContactUs() {
  return (
    <section id="contactUs" className="star-pattern bg-purple-200">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-12 text-center font-title text-4xl font-bold text-purple-950">
          Contáctame
        </h2>
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
          <ContactInfoCard
            icon={<MapPinned className="size-8" />}
            info="Ciudad Guayana, Pto. Ordaz, Villa Africana"
            title="Ubicación"
            href="https://maps.app.goo.gl/WsBk6HxkBd3AmwJGA"
          />
          <ContactInfoCard
            icon={<Mail className="size-8" />}
            info="estefaniajimenezquiroz@gmail.com"
            title="Correo"
            href="mailto:estefaniajimenezquiroz@gmail.com"
          />
          <ContactInfoCard
            icon={<Clock5 className="size-8" />}
            info="Lun a Vie, 6 A.M. - 12 P.M & 2 P.M. - 7 P.M."
            title="Horario de Atención"
          />
          <ContactInfoCard
            icon={<Phone className="size-8" />}
            info="+58 4124249415"
            title="Whatsapp"
            href="https://wa.me/+584124249415"
          />
          <ContactInfoCard
            icon={<Instagram className="size-8" />}
            info="@heavenly.nails111"
            title="Instagram"
            href="https://www.instagram.com/heavenly.nails111"
          />
        </div>
      </div>
    </section>
  )
}
