import styles from './styles.module.scss';
import cn from 'classnames';          
import { productType, imageData } from '@/types';
import {
  getDocs,
  getDoc,
  collection,
  doc,
  DocumentData,
} from 'firebase/firestore';
import { StaticImageData } from 'next/image';
import { db } from '@/firebase/clientApp';
import { NextPage } from 'next';
import testImage from 'public/img/product.jpg';
import testImage2 from 'public/img/product1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
    const data = documentData.data();
    return {
      props: { data },
    };
  } catch (err) {
    console.warn({ err });
  }
};

const Bouquet: NextPage<productProps> = ({ data }) => {
  // const productImages:  StaticImageData[] = [testImage, testImage2];
  // const imgArray: Array<any> = data.imagesData;
  const imgUrlsArray: Array<string> = data.imageUrls;
  const mainImgUrl = imgUrlsArray[0];
  const [mainImg, setMainImg] = useState(imgUrlsArray[0]);

	return (
    <div className={styles.productPage}>

      <div className={styles.carouselSection}>
        <div className={styles.carousel}>
          <img src={mainImg} className={styles.mainImg} alt="no image" />
          <div className={styles.previewLine}>
            {imgUrlsArray && imgUrlsArray.map(url => (
              <img
                src={url}
                onClick={() => {setMainImg(url)}}
                className={cn(styles.subImg, url === mainImg ? styles.subImgActive: '')}
                alt="Sub Image"
                key={Math.random()}
              />
            ))}
          </div>

          {/* <Image src={mainImg} alt="" className={styles.mainImg}/>
          <div className={styles.previewLine}>
            {productImages && productImages.map(image => (
              <Image
                src={image}
                onClick={() => {setMainImg(image)}}
                className={cn(styles.subImg, image === mainImg ? styles.subImgActive: '')}
                alt="Sub Image"
                key={Math.random()}
              />
            ))}
          </div> */}
        </div>
      </div>

      <div className={styles.infoSection}>
        <h1 className={styles.productName}>{data.name}</h1>
        <h1 className={styles.productPrice}>{data.price} ₽</h1>
        <div className={styles.availability}>
          <span className={styles.isAvailable}>В наличии</span>
          <FontAwesomeIcon className={styles.availabilityIcon} icon={faCheckCircle}/>
        </div>

        <div className={styles.amountSelector}>
          <button className={styles.amountBtn}>
            <FontAwesomeIcon className={styles.btnIcon} icon={faPlus}/>
          </button>
          <span className={styles.amount}>2</span>
          <button className={styles.amountBtn}>
            <FontAwesomeIcon className={styles.btnIcon} icon={faMinus}/>
          </button>
          <button className={styles.cartBtn}>
            В корзину
          </button>
        </div>
      </div>
    </div>
	);
}
 
export default Bouquet;