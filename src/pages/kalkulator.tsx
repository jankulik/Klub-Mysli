import React, { useState } from 'react';
import Layout from '../components/Layout';
import Questions from '../components/Questions';
import { useStyles } from '../styles/Kalkulator.styles';

export default function Kalkulator() {
  const { classes, cx } = useStyles();

  return (
    <Layout>
      <div className={classes.wrapper}>
        <div className={classes.flexContainer}>
          <Questions />
        </div>
      </div>
    </Layout>
  )
}
