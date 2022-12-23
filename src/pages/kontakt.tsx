import { useStyles } from '../styles/kontakt.styles';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ContactUs } from '../components/ContactUs';

export default function Kontakt() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Kontakt | Klub Myśli Ekologicznej</title>
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
          <div className={classes.wrapper}>
            <ContactUs />
          </div>
        </div>
      </Layout>
    </>

  )
}
