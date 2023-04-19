import styles from './styles.module.scss'
import { NextPage } from 'next';
import cn from "classnames"
import SiteHeader from "@/comps/app/SiteHeader/SiteHeader";
import WhiteBackdrop from '@/comps/app/whiteBackdrop/WhiteBackdrop';
import Navbar from "@/comps/app/NavBar/Navbar";
import { ReactNode } from 'react';
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "500", "700"],//light, regular, med, bold
  preload: true,
})

interface Props {
  className?: string,
  children: ReactNode,
}

const MainLayout: React.FC<Props> = ({children, className}) => {
  return (
    <>
			<SiteHeader />
      <WhiteBackdrop />
      <Navbar />
      <div className={cn(styles.layout, className, roboto.className)}>
				{ children }
			</div>
    </>
  )
}

export default MainLayout;