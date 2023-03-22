import React from 'react';
import Card from './card';
import Picture from './picture'
import styles from './index.module.css'

export default function index({intro, project, privateProject, link}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <div className={styles.intro}>{intro}</div>
      <Card title={'主要项目展示'} list={project} />
      <Card title={'个人项目展示'} list={privateProject} />
      <Picture title={'友情链接'} list={link} />
    </div>
  )
}
