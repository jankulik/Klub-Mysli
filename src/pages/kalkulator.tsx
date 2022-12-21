import Layout from '../components/Layout';
import Questions from '../components/Questions';
import { useStyles } from '../styles/kalkulator.styles';
import Head from 'next/head';

export default function Kalkulator() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Kalkulator Śladu Ekologicznego | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <Questions />
        </div>
      </Layout>
    </>
  )
}
