import { Roboto } from 'next/font/google'
import { useRef, useState, RefObject, useEffect } from 'react';
import SiteHeader from '@/comps/app/SiteHeader/SiteHeader';
import Navbar from '@/comps/app/NavBar/Navbar';

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "500", "700"],//light, regular, med, bold
  preload: true,
})

interface Props {
  className?: string;
  active: boolean;
}

export default function Home() {
  // const [ heroActive, setHeroActive ] = useState(false);
  // const [ cardsActive, setCardsActive ] = useState(false)
  // const [ setsActive, setSetsActive ] = useState(false)
  // const [ strawberryActive, setStrawberryActive ] = useState(false)
  // const [ chokoActive, setChokoActive ] = useState(false)
  // const [ combinationActive, setCombinationActive ] = useState(false)

  // const isInViewport = (ref: RefObject<HTMLDivElement>, set: React.Dispatch<React.SetStateAction<boolean>>) => {
  //   const top = ref.current?.getBoundingClientRect().top;
  //   if (top){
  //     if (top - 400 <= 0) {
  //       set(true)
  //     }
  //   }
  // }
  // setTimeout(() => {
  //   setHeroActive(true);
  // }, 2000);

  // const heroSectionRef = useRef<HTMLDivElement>(null);
  // const setsSectionRef = useRef<HTMLDivElement>(null);
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
      <SiteHeader />
      <Navbar />
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
