import React from 'react';
import Card from './card'
import styles from './index.module.css'

export default function index () {
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <Card />
    </div>
  )
}
