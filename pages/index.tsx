import Head from 'next/head';
import Image from 'next/image';
import { Heading } from '../components/Heading';
import Socials from '../components/Socials';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch (error) {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="NextJS Application" />
      <Socials socials={socials} />
    </div>
  );
};
export default Home;
