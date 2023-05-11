import styles from './styles.module.scss'
import LoadingScreen from '@/comps/app/LoadingScreen/LoadingScreen';
import cn from "classnames"
import SiteHeader from "@/comps/app/SiteHeader/SiteHeader";
import WhiteBackdrop from '@/comps/app/whiteBackdrop/WhiteBackdrop';
import Navbar from "@/comps/app/NavBar/Navbar";
import { ReactNode, useEffect } from 'react';
import { Roboto } from 'next/font/google'
import SiteFooter from '@/comps/app/SiteFooter/SiteFooter';
import { observer } from 'mobx-react-lite';
import CartStore from '@/stores/CartStore';
import { productType } from '@/types';

const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "500", "700", "900"],//light, regular, med, bold
  preload: true,
})



interface Props {
  children: ReactNode,
}

const MainLayout: React.FC<Props> = ({children}) => {

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) CartStore.products = JSON.parse(savedProducts) as productType[];
    console.log('localhost');
  }, []);

  return (
    <>
			<SiteHeader />
      <WhiteBackdrop />
      <Navbar />
      <LoadingScreen />
      <div className={cn(styles.mainLayout, roboto.className)}>
        { children }
      </div>
      <SiteFooter />
    </>
  )
}

export default observer(MainLayout);