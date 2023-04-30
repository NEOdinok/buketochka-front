import type { NextPage } from 'next'
import LoadingScreen from '@/comps/app/LoadingScreen/LoadingScreen';
import { ReactNode, useEffect } from 'react';
import styles from './styles.module.scss';
import ProductCard from '@/comps/app/ProductCard/ProductCard';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import UIStore from '@/stores/UIStore';
import { observer } from 'mobx-react-lite';
import { productType } from '@/types';

interface staticProps {
  products: Array<productType>;
}

export const getStaticProps = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'products'));
    const products: Array<productType> = [];
    querySnapshot.forEach(productDoc => {
      if (productDoc.data().category.label == 'букеты') {
        products.push({ ...productDoc.data(), id: productDoc.id } as productType);
      }
    });
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    console.warn({error});
  }
}

const BouqetsPage: NextPage<staticProps> = ({ products }) => {

  const renderProductCards = () =>
    products.map((product): ReactNode => (
        <ProductCard 
          name={product.name}
          price={product.price}
          id={product.id}
          key={product.id}
          page={'bouquets'}
          product={product}
        />
      )
    );

  return (
    <>
      <div className={styles.bouquets}>
        <h1 className={styles.header}>Ягодные букеты</h1>
        <section className={styles.cardsContainer}>
          {products && renderProductCards()}
        </section>
      </div>
    </>
  )
}

export default observer(BouqetsPage);
