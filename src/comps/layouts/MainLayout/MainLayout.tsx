import styles from './styles.module.scss'
import LoadingScreen from '@/comps/app/LoadingScreen/LoadingScreen';
import { NextPage } from 'next';
import cn from "classnames"
import SiteHeader from "@/comps/app/SiteHeader/SiteHeader";
import WhiteBackdrop from '@/comps/app/whiteBackdrop/WhiteBackdrop';
import Navbar from "@/comps/app/NavBar/Navbar";
import { ReactNode, useEffect } from 'react';
import { Roboto } from 'next/font/google'
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import SiteFooter from '@/comps/app/SiteFooter/SiteFooter';

const roboto = Roboto({ 
  subsets: ['latin', 'cyrillic'],
  weight: ["300", "400", "500", "700", "900"],//light, regular, med, bold
  preload: true,
})

interface Props {
  children: ReactNode,
}

const MainLayout: React.FC<Props> = ({children}) => {
  type subCategoryDataType = {
    id: string,
    name: string,
    route: string,
  }
  type categoryDataType = {
    id: string,
    name: string,
    route: string,
    subcategories: Array<subCategoryDataType>;
  };
  type navBarDataType = Array<categoryDataType>;
  const navBarData: navBarDataType = [];

  useEffect(() => {
    const getNavbarData = async () => {
      try {
        //fetch all categories
        const categoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories'));
        //for each category
        categoriesSnapshot.forEach(async categoryDoc => {
          //create temporary subCategoriesArray
          const subCategoriesData: Array<subCategoryDataType> = [];
          //get all subcategories
          const subCategoriesSnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'categories', categoryDoc.id, 'subcategories'));
          //for each subcategory
          if (subCategoriesSnapshot) subCategoriesSnapshot.forEach(subCategoryDoc => {
            //put it to the temporary array
            subCategoriesData.push({ 
              id: subCategoryDoc.id,
              name: subCategoryDoc.data().subCategoryName,
              route: subCategoryDoc.data().subCategoryRoute,
            })
          });

          //fill navbar data with categories and subcategories
          navBarData.push({
            id: categoryDoc.id,
            name: categoryDoc.data().categoryName,
            route: categoryDoc.data().categoryRoute,
            subcategories: subCategoriesData,
          })
        });
      } catch (error) {
        console.warn({error});
      }
    }

    getNavbarData();
    console.log('data:', navBarData);
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

export default MainLayout;