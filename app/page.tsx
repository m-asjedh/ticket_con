import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import UpcomingEvents from "@/components/upcoming-events"
import InstagramFeed from "@/components/instagram-feed"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <InstagramFeed />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
