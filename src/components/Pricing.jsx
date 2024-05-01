import { MouseParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";
const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className=" container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img src={smallSphere} className="realtive z-1 w-[20rem] " alt="Sphere" />
          <MouseParallax isAbsolutelyPositioned>
            <div className=" absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img src={stars} className=" w-full" alt="" />
            </div>
          </MouseParallax>
        </div>
        <Heading className={" text-center"} tag="Get Started With BrainWave" title="Pay once, user forever" />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a className="text-xs font-bold font-code  tracking-wider uppercase border-b" href="">
            See Full Details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
