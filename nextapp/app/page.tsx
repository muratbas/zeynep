import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlaylistSection from "@/components/PlaylistSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FAB from "@/components/FAB";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <HeroSection />
        <PlaylistSection />
        <AboutSection />
      </main>
      <Footer />
      <FAB />
    </>
  );
}
