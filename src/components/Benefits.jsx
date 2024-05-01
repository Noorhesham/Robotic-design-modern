import { benefits } from "../constants"
import Card from "./Card"
import Heading from "./Heading"
import Section from "./Section"

const Benefits = () => {
  return (
    <Section id="features">
     <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-xl" title="Chat Smarter, Not Harder with Brainwave"/>
        <div className="flex flex-wrap gap-10 mb-10">
            {benefits.map((benefit,i)=><Card item={benefit} key={i}/>)}
        </div>
     </div>
    </Section>
  )
}

export default Benefits
