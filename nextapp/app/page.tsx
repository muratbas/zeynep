import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlaylistSection from "@/components/PlaylistSection";
import NotesSection from "@/components/NotesSection";
import Footer from "@/components/Footer";
import HeartClickEffect from "@/components/HeartClickEffect";

export default function Home() {
  return (
    <>
      <HeartClickEffect />
      <Header />
      <main className="pt-[72px]">
        <HeroSection />
        <PlaylistSection />
        <NotesSection />
      </main>
      <Footer />
    </>
  );
}
