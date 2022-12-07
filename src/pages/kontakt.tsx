import React, { useState } from 'react'
import { Checkbox, CheckboxProps, Text } from '@mantine/core';
import { IconLeaf } from '@tabler/icons';
import Layout from '../components/Layout';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, className }) =>
  indeterminate ? <IconLeaf className={className} /> : <IconLeaf className={className} />

export default function Kontakt() {
  return (
    <Layout>
      {/* <div className={styles.container}>

        <div className={styles.wrapper}>
          <div className={styles.rectangle}>
            <div>
              TEST
            </div>
          </div>
        </div>

        <h2 className={styles.title}>About Page</h2>

        <p className={styles.description}>
          Lorem Ipsum
        </p>
      </div> */}
    </Layout>
  )
}