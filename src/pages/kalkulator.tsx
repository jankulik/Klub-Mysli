import Layout from '../components/Layout';
import Questions from '../components/Questions';
import { useStyles } from '../styles/kalkulator.styles';
import Head from 'next/head';

export default function Kalkulator() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Kalkulator Śladu Ekologicznego</title>
      </Head>
      <Layout>
        <div className={classes.wrapper}>
          <div className={classes.flexContainer}>
            <Questions />
          </div>
        </div>
      </Layout>
    </>
  )
}
