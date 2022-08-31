import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Questions from '../components/Questions/Questions';
import { useStyles } from '../styles/Kalkulator.styles';

export default function Kalkulator() {
  const { classes, cx } = useStyles();

  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.flexContainer}>

          <div className={classes.rectangle} style={{ textAlign: 'center' }}>
            <div>
              <h1 style={{ lineHeight: '2rem' }}>Czy wystarczy nam Ziemi? Kalkulator śladu ekologicznego</h1>
              <p><br />Wybierz wszystkie odpowiedzi, które są najbliższe Twojemu stylowi życia</p>
            </div>
          </div>

          <Questions />
        </div>
      </div>
    </Layout>
  )
}
