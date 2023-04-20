import HeroSection from "@/comps/homeSections/HeroSection/HeroSection";
import CardsSection from "@/comps/homeSections/CardsSection/CardsSection";
import { NextPage } from "next";
import { useState, useRef } from "react";
import { isInViewport } from "@/utils/homePageUi";

const Home: NextPage = () => {
  const [ heroActive, setHeroActive ] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const [ cardsActive, setCardsActive ] = useState(false)
  const cardsSectionRef = useRef<HTMLElement>(null);

  setTimeout(() => {
    setHeroActive(true);
  }, 2000);

  // const [ strawberryActive, setStrawberryActive ] = useState(false)
  // const [ chokoActive, setChokoActive ] = useState(false)
  // const [ combinationActive, setCombinationActive ] = useState(false)

  // const strawberrySectionRef = useRef<HTMLDivElement>(null);
  // const chokoSectionRef = useRef<HTMLDivElement>(null);
  // const combinationSectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   document.addEventListener("scroll", (e: Event) => {
  //     isInViewport(setsSectionRef, setSetsActive); 
  //     isInViewport(strawberrySectionRef, setStrawberryActive);
  //     isInViewport(chokoSectionRef, setChokoActive);
  //     isInViewport(combinationSectionRef, setCombinationActive);
  //   });
  //   return (() => document.removeEventListener("scroll", (e: Event) => {
  //     isInViewport(setsSectionRef, setSetsActive); 
  //     isInViewport(strawberrySectionRef, setStrawberryActive);
  //     isInViewport(chokoSectionRef, setChokoActive);
  //     isInViewport(combinationSectionRef, setCombinationActive);
  //   }));
  // }, []);

  return (
    <>
      <HeroSection ref={heroSectionRef} active={heroActive} />
      <CardsSection ref={cardsSectionRef} active={cardsActive} />
    </>
  )
}

export default Home;