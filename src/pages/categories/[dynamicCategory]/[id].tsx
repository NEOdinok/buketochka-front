import styles from './styles.module.scss';
import cn from 'classnames';          
import {
  getDocs,
  getDoc,
  collection,
  doc,
  DocumentData,
} from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import CartStore from '@/stores/CartStore';
import { observer } from 'mobx-react-lite';
import { productType } from '@/types';
import ProductPreview from '@/comps/app/ProductPreview/ProductPreview';

interface serverSideProps {
  data: DocumentData;
  id: string,
}

export async function getServerSideProps(context: any) {
  try {
    const id = context.params.id;
    const documentData = await getDoc(doc(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'products', `${id}`));

    const data = {
      cartAmount: 0,
      category: documentData.data()?.category,
      description: documentData.data()?.description,
      id: documentData.id,
      imageUrls: documentData.data()?.imageUrls,
      imagesData: documentData.data()?.imagesData,
      name: documentData.data()?.name,
      price: +documentData.data()?.price,
      quantity: +documentData.data()?.quantity,
      subCategory: documentData.data()?.subCategory,
    }
    return {
      props: { data, id },
    };
  } catch (err) {
    console.warn({ err });
  }
}

const Bouquet: NextPage<serverSideProps> = ({ data, id }) => {
  const imgUrlsArray: Array<string> = data.imageUrls;
  const mainImgUrl = imgUrlsArray[0];
  const [mainImg, setMainImg] = useState(imgUrlsArray[0]);

	return (
    <>
      <ProductPreview product={data as productType} />
    </>
	);
}
 
export default observer(Bouquet);