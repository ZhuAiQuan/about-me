import React from 'react';
import styles from './index.module.css'

export default function card({ title }) {
  return (
    <div className={styles.card}>
      <div className={styles['card-title']}>
        <div className={styles['card-title-text']}>主要项目</div>
      </div>
      <div className={styles.content}></div>
    </div>
  )
}
