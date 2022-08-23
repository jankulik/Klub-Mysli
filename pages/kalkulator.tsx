import styles from '../styles/Kalkulator.module.css'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Questions from '../components/Questions'

export default function Kalkulator() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.flexContainer}>

          <div className={styles.rectangle} style={{ textAlign: 'center' }}>
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
