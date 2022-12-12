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
      </Head>

      <Layout>
        <div className={classes.wrapper}>
          <ContactUs />
        </div>
      </Layout>
    </>

  )
}
