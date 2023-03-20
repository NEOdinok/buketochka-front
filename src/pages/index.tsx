import Head from 'next/head'
import { Roboto } from 'next/font/google'
import SiteHeader from '@/comps/app/SiteHeader/SiteHeader';

import { HeroSection } from '@/comps/home-sections/HeroSection/HeroSection';
import { CardsSection } from '@/comps/home-sections/CardsSection/CardsSection';
import { SetsSection } from '@/comps/home-sections/SetsSection/SetsSection';
import { StrawberrySection } from '@/comps/home-sections/StrawberrySection/StrawberrySection';
import { ChokoSection } from '@/comps/home-sections/ChokoSection/ChokoSection';
import { CombinationSection } from '@/comps/home-sections/CombinationSection/CombinationSection';
import { ContactsList } from '@/comps/app/ContactsList/ContactsList';
import contacts from '@/schema/contacts';
import { useRef, useState, RefObject, useEffect } from 'react';

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "700"],//light, regular, bold
  preload: true,
})

interface Props {
  className?: string;
  active: boolean;
}

export default function Home() {
  const [ heroActive, setHeroActive ] = useState(false);
  const [ cardsActive, setCardsActive ] = useState(false)
  const [ setsActive, setSetsActive ] = useState(false)
  const [ strawberryActive, setStrawberryActive ] = useState(false)
  const [ chokoActive, setChokoActive ] = useState(false)
  const [ combinationActive, setCombinationActive ] = useState(false)

  const isInViewport = (ref: RefObject<HTMLDivElement>, set: React.Dispatch<React.SetStateAction<boolean>>) => {
    const top = ref.current?.getBoundingClientRect().top;
    if (top){
      if (top - 400 <= 0) {
        set(true)
      }
    }
  }
  setTimeout(() => {
    setHeroActive(true);
  }, 2000);

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const setsSectionRef = useRef<HTMLDivElement>(null);
  const strawberrySectionRef = useRef<HTMLDivElement>(null);
  const chokoSectionRef = useRef<HTMLDivElement>(null);
  const combinationSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("scroll", (e: Event) => {
      isInViewport(setsSectionRef, setSetsActive); 
      isInViewport(strawberrySectionRef, setStrawberryActive);
      isInViewport(chokoSectionRef, setChokoActive);
      isInViewport(combinationSectionRef, setCombinationActive);
    });
    return (() => document.removeEventListener("scroll", (e: Event) => {
      isInViewport(setsSectionRef, setSetsActive); 
      isInViewport(strawberrySectionRef, setStrawberryActive);
      isInViewport(chokoSectionRef, setChokoActive);
      isInViewport(combinationSectionRef, setCombinationActive);
    }));
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        {/* <HeroSection ref={heroSectionRef} active={heroActive}/>
        <CardsSection />
        <SetsSection ref={setsSectionRef} active={setsActive}/>
        <StrawberrySection ref={strawberrySectionRef} active={strawberryActive}/>
        <ChokoSection ref={chokoSectionRef} active={chokoActive}/>
        <CombinationSection ref={combinationSectionRef} active={chokoActive} />
        <ContactsList contacts={contacts}/> */}
      </main>
    </>
  )
}
