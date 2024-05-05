import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import Button from "./Button";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  exit: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
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
const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation || !(window.innerWidth <= 1024)) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setOpenNavigation(!isMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`fixed  w-full top-0 left-0 z-50  border-b border-n-6 lg:backdrop-blur-sm
    ${openNavigation ? "bg-n-8" : "bg-n-8/85  backdrop-blur-sm "}`}
    >
      <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className=" block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <AnimatePresence>
          {openNavigation && (
            <motion.nav
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${
                openNavigation ? "flex" : "hidden"
              }  fixed top-[5rem] left-0 bottom-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
            >
              <div className=" relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                {navigation.map((link) => (
                  <motion.a
                    variants={item}
                    onClick={handleClick}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
            ${link.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      link.url === pathName.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                    href={link.url}
                    key={link.id}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
              <HambugerMenu />
            </motion.nav>
          )}
        </AnimatePresence>
        <a href="/signup" className=" button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
          New Account
        </a>
        <Button className="hidden lg:flex " href="/login">
          Sign In
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
