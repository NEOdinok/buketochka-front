import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import {
  getDocs,
  getDoc,
  collection,
  doc,
  DocumentData,
} from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { NextPage } from 'next';

interface productProps {
  data: DocumentData;
}

export const getStaticPaths = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
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
    const documentData = await getDoc(doc(db, 'products', `${id}`));
    const data = documentData.data();

    return {
      props: { data },
    };
  } catch (err) {
    console.warn({ err });
  }
};

const Bouquet: NextPage<productProps> = ({ data }) => {
	return (
		<h1>{data.name}</h1>
	);
}
 
export default Bouquet;