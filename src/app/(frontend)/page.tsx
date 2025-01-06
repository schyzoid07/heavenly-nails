import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import AboutUs from "@/components/AboutUs"
import AISupport from "@/components/AISupport"
import Hero from "@/components/Hero"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <AboutUs />
        <Gallery />
        <ContactUs />
      </main>
      <Footer />
      <AISupport />
    </>
  )
}
