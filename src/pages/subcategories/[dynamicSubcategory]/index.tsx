import type { NextPage } from 'next'
import { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ProductCard from '@/comps/app/ProductCard/ProductCard';
import { getDocs, collection, DocumentData, query } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import UIStore from '@/stores/UIStore';
import { observer } from 'mobx-react-lite';
import { productType } from '@/types';
import { useRouter } from 'next/router';
import { capitalizeFirstLetter } from '@/utils/utilFunctions';

interface serverSideProps {
  products: Array<productType>;
	param: string;
}

export async function getServerSideProps(context: any) {
	const param = context.params.dynamicSubcategory; 
	try {
		const querySnapshot = await getDocs(collection(db, `products`));
		const products: Array<productType> = [];
		querySnapshot.forEach(productDoc => {
      if (productDoc.data().subCategory && productDoc.data().subCategory.label === `${param}`) {
        products.push({ ...productDoc.data(), id: productDoc.id, cartAmount: 0 } as productType);
      }
		});
		return {
			props: {
				products: JSON.parse(JSON.stringify(products)),
				param,
			},
		};
	} catch (error) {
		console.warn({error});
	}
}

const DynamicRoute: NextPage<serverSideProps> = ({ param, products }) => {
	const router = useRouter();

  useEffect(() => {
    console.log('route param', param, 'its type', typeof(param));
  }, []);

  const renderProductCards = () =>
    products.map((product): ReactNode => (
        <ProductCard 
          id={product.id}
          key={product.id}
          pageType='subcategories'
          page={param}
          product={product}
        />
      )
    );

  return (
    <>
      <div className={styles.sets}>
        {
          !products.length?
          <h1 className={styles.header}>No such subcategory</h1>

          :
          <>
            <h1 className={styles.header}>{capitalizeFirstLetter(param)} Page</h1>
            <section className={styles.cardsContainer}>
              {products && renderProductCards()}
            </section>
          </>
        }
      </div>
    </>
  )
}
 
export default observer(DynamicRoute);