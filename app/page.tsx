import Navbar from "../components/navbar";
import ImageSlider from "@/components/ImageSlider";
import Introduction from "@/components/introduction";
import SlicePurpose from "@/components/slicePurpose";
import WhyMustAzora from "@/components/whyazora";
import SliceJourney from "@/components/sliceJourney";
import Project from "@/components/project";
import OurTeam from "@/components/ourteam";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  const sliderImages = [
    {
      src: "/assets/imgslide-1.jpg",
      alt: "image slider 1",
    },
    {
      src: "/assets/imgslide-2.jpg",
      alt: "image slider 2",
    },
    {
      src: "/assets/imgslide-3.jpg",
      alt: "image slider 3",
    },
    {
      src: "/assets/imgslide-4.jpg",
      alt: "image slider 4",
    },
    {
      src: "/assets/imgslide-5.jpg",
      alt: "image slider 5",
    },
  ];
  return (
    <div className="h-full  bg-white font-sans">
      <Navbar></Navbar>
      <ImageSlider images={sliderImages}></ImageSlider>
      <Introduction></Introduction>
      <SlicePurpose></SlicePurpose>
      <WhyMustAzora></WhyMustAzora>
      <SliceJourney></SliceJourney>
      <Project></Project>
      <OurTeam></OurTeam>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
