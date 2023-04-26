import styles from './styles.module.scss'
import LoadingScreen from '@/comps/app/LoadingScreen/LoadingScreen';
import cn from "classnames"
import SiteHeader from "@/comps/app/SiteHeader/SiteHeader";
import WhiteBackdrop from '@/comps/app/whiteBackdrop/WhiteBackdrop';
import Navbar from "@/comps/app/NavBar/Navbar";
import { ReactNode, useEffect, useState } from 'react';
import { Roboto } from 'next/font/google'
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { categoryDataType, subCategoryDataType, categoriesType } from '@/types';
import SiteFooter from '@/comps/app/SiteFooter/SiteFooter';
import { observer } from 'mobx-react-lite';

const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "500", "700", "900"],//light, regular, med, bold
  preload: true,
})

interface Props {
  children: ReactNode,
}

const MainLayout: React.FC<Props> = observer(({children}) => {
  // const [navBarData, setNavBarData] = useState<navBarDataType>([]);
  // const temp: navBarDataType = [];

  // useEffect(() => {
  //   const getNavbarData = async () => {
  //     // const temp: navBarDataType = [];
  //     try {
  //       const categoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories'));
  //       categoriesSnapshot.forEach(async categoryDoc => {
  //         const subCategoriesData: Array<subCategoryDataType> = [];
  //         const subCategoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories', categoryDoc.id, 'subcategories'));
  //         if (subCategoriesSnapshot) subCategoriesSnapshot.forEach(subCategoryDoc => {
  //           subCategoriesData.push({ 
  //             id: subCategoryDoc.id,
  //             name: subCategoryDoc.data().subCategoryName,
  //             route: subCategoryDoc.data().subCategoryRoute,
  //           })
  //         });

  //         temp.push({
  //           id: categoryDoc.id,
  //           name: categoryDoc.data().categoryName,
  //           route: categoryDoc.data().categoryRoute,
  //           subcategories: subCategoriesData,
  //         })
  //       });

  //       console.log('temp log1:', temp);
  //       if (temp) {
  //         console.log('temp log2:', temp);
  //         console.log('setNavBarData:', setNavBarData);
  //         setNavBarData(temp);
  //       }
  //       if (navBarData) console.log('navBarData:', navBarData);

  //     } catch (error) {
  //       console.warn({error});
  //     }
  //   }

  //   getNavbarData();
  // }, []);

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
})

export default MainLayout;