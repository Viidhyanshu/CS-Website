
import {Skiper19} from "@/src/components/ui/stroke"
import ImageHover from "@/src/components/common/ImageHover";
import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/ui/Footer"
import CardStack from "@/src/components/common/CardStack";
import HorizontalGallery from "@/src/components/gallery/HorizontalGallery";
import TargetCursor from "@/src/components/ui/TargetCursor";
import Idcard from "@/src/components/common/Idcard";


export default function Home() {
  return (
    <>

    
    <TargetCursor/>
    <div><Navbar/></div>
    
    <div><Skiper19 />
    
    </div>
    <CardStack/>
    <HorizontalGallery/>
    <div style={{ height: "500px", position: "relative" }}>
      
      <ImageHover/>
    </div>
     <Idcard/>
    <div style={{ position: "relative", zIndex: 100 }}>
      <Footer/>
    </div>
    </>
  );
}