import Layout from '../components/Layout';
import Questions from '../components/Questions';
import { useStyles } from '../styles/kalkulator.styles';
import Head from 'next/head';
import TitleCard from '../components/TitleCard';

export default function Kalkulator() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Kalkulator Śladu Ekologicznego | Klub Myśli Ekologicznej</title>
        <meta
          name="description"
          content="Klub Myśli Ekologicznej prowadzi działalność z zakresu ochrony środowiska zmierzającą do wzrostu wiedzy i świadomości ekologicznej mieszkańców Śląska i całej Polski, a także zmiany ich postaw na bardziej proekologiczne."
          key="desc"
        />
        <meta
          property="og:title"
          content="Klub Myśli Ekologicznej"
        />
        <meta
          property="og:description"
          content="Klub Myśli Ekologicznej prowadzi działalność z zakresu ochrony środowiska zmierzającą do wzrostu wiedzy i świadomości ekologicznej mieszkańców Śląska i całej Polski, a także zmiany ich postaw na bardziej proekologiczne."
        />
        <meta
          property="og:image"
          content="/images/tree1.jpg"
        />
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <TitleCard
            title='Kalkulator Śladu ekologicznego'
            imageUrl='/images/bird.jpg'
          />

          <Questions />
        </div>
      </Layout>
    </>
  )
}
