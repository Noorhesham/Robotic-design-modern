import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import {RightCurve,LeftCurve} from "./design/Collaboration"
const Collaboration = () => {
  return (
    <Section crosses>
      <div className=" container flex flex-col items-start md:flex-row">
        <div className=" max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless Collaboration</h2>
          <ul className=" max-w-[22rem] flex flex-col gap-5 mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id}>
                <div className="flex gap-2 items-center">
                  <img src={check} alt="check" />
                  <h6 className=" body-2 ml-3">{item.title}</h6>
                </div>
                {item.text && <p className=" body-2 mt-3 text-n-4">{item.text}</p>}
              </li>
            ))}
          </ul>
          <Button>Try it Now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-5">
           <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">{collabText}</p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className=" flex w-60 aspect-square m-auto  border border-n-6 rounded-full">
              <div className="flex w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
               <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} alt="brainwave" />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app,i)=><li className={`absolute left-1/2 h-1/2 -ml-[1.7rem] origin-bottom rotate-${i*45}`} key={i}>
                <div className={`relative -top-[1.6rem] flex w-[3.5rem] h-[3.5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${i*45}`}>
                  <img className=" m-auto w-[2rem]"src={app.icon}/>
                </div>
              </li>)}
            </ul>
            <RightCurve/>
            <LeftCurve/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
