import React, { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from './index.module.css'

export default function Index({ background }) {
  const router = useRouter();
  const [target, setTarget] = useState(() => {
    const temp = router.query.link ? JSON.parse(router.query.link) : '';
    if (temp instanceof Array) return temp
    else return [temp]
  })

  return (
    <div className={styles.container} style={{backgroundImage: `url(${background.url})`}}>
      <Head>
        <title>跳转提示</title>
      </Head>
      <div className={styles.content}>
        {
          target.length ?
            target.map(item => {
              return (<a href={item} key={item} className={styles.block}>{item}</a>)
            })
          : <a href={link}>{link}</a>
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const background = {
    url: "",
    copyright: "",
    title: "",
  };
  const { images } = await fetch(
    "https://bird.retiehe.com/cache/bing.json"
  ).then((res) => res.json());
  if (images.length) {
    const { url, copyright, title } = images[0];
    background.url = `https://cn.bing.com${url}`;
    background.copyright = copyright;
    background.title = title;
  }
  return {
    props: {
      background
    }
  }
}