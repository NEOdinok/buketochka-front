import type { NextPage } from 'next'
import { ReactNode, useEffect } from 'react';
import styles from './styles.module.scss';
import ProductCard from '@/comps/app/ProductCard/ProductCard';
import { getDocs, collection, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

interface staticProps {
  products: DocumentData[];
}

export const getStaticProps = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products: DocumentData[] = [];
    querySnapshot.forEach((productDoc) => {
      products.push({...productDoc.data(), id: productDoc.id});
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
        />
      )
    );

  return (
		<div className={styles.bouquets}>
      <h1 className={styles.header}>Ягодные букеты</h1>
      <section className={styles.cardsContainer}>
        {products && renderProductCards()}
      </section>
    </div>
  )
}

export default BouqetsPage;
