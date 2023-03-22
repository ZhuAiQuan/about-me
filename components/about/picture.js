import React from 'react';
import Image from 'next/image'
import styles from "./index.module.css";
import { useRouter } from 'next/router'

export default function Picture({ title, list: link }) {
  const { push } = useRouter();
  function toBlog(link) {
    push(`/target/to?link=${JSON.stringify(link)}`)
  }
  return (
    <div className={styles.card}>
      <div className={styles["card-title"]}>
        <div className={styles["card-title-text"]}>{title}</div>
      </div>
      <div className={styles['pic-content']}>
        {
          link.map(item => {
            return (
              <div className={styles.pic_list} key={item.link} onClick={() => toBlog(item.link)}>
                <div className={styles.pic_list_avatar}>
                  <Image src={item.avatar} width={48} alt={item.name} height={48} />
                </div>
                <div className={styles.pic_list_name}>{item.name}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
