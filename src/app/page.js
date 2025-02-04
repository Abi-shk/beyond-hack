import Image from "next/image";
// import CountDown from "./components/CountDown";
// import Maps from "./components/Embeddedmap";
// import Domain from "@/components/common/domain";
// import About from "./components/About";
import Hero from "@/components/Hero";
// import PrizePoolSection from "./components/PrizePool";
import Timeline from "@/components/Timeline";
import Faq from "@/components/Faq";


export default function Home() {
  return (
    <div>


      <Hero/>
      {/* <CountDown/>
      <About/> */}
      {/* <Domain/> */}
      <Timeline/>
      {/* <PrizePoolSection/> */}
      <Faq/>
      {/* <Maps/> */}
     
    </div>
  );
}
