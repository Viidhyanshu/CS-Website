
import {Skiper19} from "@/src/components/ui/stroke"
import ImageHover from "@/src/components/common/ImageHover";
import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/ui/Footer"
import CardStack from "@/src/components/common/CardStack";
import HorizontalGallery from "@/src/components/gallery/HorizontalGallery";
import TargetCursor from "@/src/components/ui/TargetCursor";
import Teamcard from "@/src/components/common/Teamcard";


export default function Home() {
  return (
    <>

    
    <TargetCursor/>
    <div><Navbar/></div>
    
    <div><Skiper19 />
    <CardStack/>
    </div>
    <div style={{ height: "500px", position: "relative" }}>
      <HorizontalGallery/>
      <ImageHover/>
    </div>
     <Teamcard/>
    
    <div style={{ position: "relative", zIndex: 100 }}>
      <Footer/>
    </div>
    </>
  );
}