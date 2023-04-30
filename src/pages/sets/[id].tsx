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


interface productProps {
  data: DocumentData;
}

export const getStaticPaths = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users', 'RGdaFnMIZ2PX5xKpwtx25kSC3dB2', 'products'));
    const paths: Array<{ params: { id: string } }> = [];
    querySnapshot.forEach((productDoc) =>
      paths.push({
        params: { id: productDoc.id.toString() },
      })
    );
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.warn({ err });
  }
};

export const getStaticProps = async (context: any) => {
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
      props: { data },
    };
  } catch (err) {
    console.warn({ err });
  }
};

const Set: NextPage<productProps> = ({ data }) => {
  const imgUrlsArray: Array<string> = data.imageUrls;
  const mainImgUrl = imgUrlsArray[0];
  const [mainImg, setMainImg] = useState(imgUrlsArray[0]);

	return (
    <ProductPreview product={data as productType} />
	);
}
 
export default observer(Set);