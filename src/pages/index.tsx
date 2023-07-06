import HeroSection from "@/comps/homeSections/HeroSection/HeroSection";
import CardsSection from "@/comps/homeSections/CardsSection/CardsSection";
import SetsSection from "@/comps/homeSections/SetsSection/SetsSection";
import BerrySection from "@/comps/homeSections/BerrySection/BerrySection";
import ChocoSection from "@/comps/homeSections/ChocoSection/ChocoSection";
import ComboSection from "@/comps/homeSections/ComboSection/ComboSection";
import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import { isInViewport } from "@/utils/homePageUi";
import CartStore from "@/stores/CartStore";
import { productType } from "@/types";

const Home: NextPage = () => {
  const [ heroActive, setHeroActive ] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const [ cardsActive, setCardsActive ] = useState(false)
  const cardsSectionRef = useRef<HTMLElement>(null);
  const [setsActive, setSetsActive] = useState(false);
  const setsSectionRef = useRef<HTMLElement>(null);
  const [berryActive, setBerryActive] = useState(false);
  const berrySectionRef = useRef<HTMLElement>(null);
  const [chocoActive, setChocoActive] = useState(false);
  const chocoSectionRef = useRef<HTMLElement>(null);
  const [comboActive, setComboActive] = useState(false);
  const comboSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setHeroActive(true);
    }, 2000);

    document.addEventListener("scroll", (e: Event) => {
      isInViewport(heroSectionRef, setHeroActive);
      isInViewport(setsSectionRef, setSetsActive); 
      isInViewport(berrySectionRef, setBerryActive); 
      isInViewport(chocoSectionRef, setChocoActive); 
      isInViewport(comboSectionRef, setComboActive); 
    })
    return (() => document.removeEventListener("scroll", (e: Event) => {
      isInViewport(heroSectionRef, setHeroActive);
      isInViewport(setsSectionRef, setSetsActive); 
      isInViewport(berrySectionRef, setBerryActive); 
      isInViewport(chocoSectionRef, setChocoActive); 
      isInViewport(comboSectionRef, setComboActive); 
    }))
  }, []);

  return (
    <>
      <HeroSection ref={heroSectionRef} active={heroActive} />
      {/* <CardsSection ref={cardsSectionRef} active={cardsActive} /> */}
      <SetsSection ref={setsSectionRef} active={setsActive} />
      <BerrySection ref={berrySectionRef} active={berryActive} />
      <ChocoSection ref={chocoSectionRef} active={chocoActive} />
      <ComboSection ref={comboSectionRef} active={comboActive}/>
    </>
  )
}

export default Home;