import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageMarquee from "@/components/ImageMarquee";
import Intro from "@/components/Intro";
import RoomsGrid from "@/components/RoomsGrid";
import Experience from "@/components/Experience";
import BookingForm from "@/components/BookingForm";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ImageMarquee />
      <Intro />
      <RoomsGrid />
      <Experience />
      <Gallery />
      <Location />
      <Testimonials />
      <BookingForm />
      <Footer />
    </main>
  );
}
