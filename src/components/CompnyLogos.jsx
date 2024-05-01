import { companyLogos } from "../constants";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0,  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const CompnyLogos = ({ className }) => {
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className={`${className || ""}`}>
      <h5 className=" tagline text-n-1/50 text-sm  text-center ">HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</h5>
      <ul className="flex justify-evenly items-center my-10 gap-5">
        {companyLogos.map((logo, i) => (
          <motion.li  variants={item} className="flex items-center justify-center flex-1 h-[8.5rem]" key={i}>
            <img src={logo} alt={logo} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CompnyLogos;
