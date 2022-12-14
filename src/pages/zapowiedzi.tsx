import Layout from '../components/Layout';
import Head from 'next/head';
import { useStyles } from '../styles/zapowiedzi.styles';
import Link from 'next/link';
import { Button } from '@mantine/core';

export default function Zapowiedzi() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Zapowiedzi | Klub Myśli Ekologicznej</title>
      </Head>

      <Layout>
        <div className={classes.parallax}>
          <div className={classes.wrapper}>

          </div>
        </div>
      </Layout>
    </>
  )
}
