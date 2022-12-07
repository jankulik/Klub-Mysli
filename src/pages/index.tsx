import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useStyles } from '../styles/Home.styles';

export default function Home() {
  const { classes, cx } = useStyles();

  return (
    <>
      <Head>
        <title>Klub Myśli Ekologicznej</title>
      </Head>
      <Layout>
        {/* <div className={classes.container}>

        <div className={classes.wrapper}>
          <div className={classes.rectangle}>
            <div>
              TEST
            </div>
          </div>
        </div>

        <h2 className={classes.title}>About Page</h2>

        <p className={classes.description}>
          Lorem Ipsum
        </p>
      </div> */}
      </Layout>
    </>
  )
}
