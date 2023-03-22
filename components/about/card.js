import React from "react";
import styles from "./index.module.css";
import { useRouter } from 'next/router'

export default function Card({ title, list }) {
  const { push } = useRouter();
  function onPush(link, event) {
    event.preventDefault();
    if (!link) return
    // console.log(link)
    const temp = JSON.stringify(link);
    push(`/target/to?link=${temp}`)
  }
  return (
    <div className={styles.card}>
      <div className={styles["card-title"]}>
        <div className={styles["card-title-text"]}>{title}</div>
      </div>
      <div className={styles.content}>
        {list.map((item) => {
          return (
            <a
              rel="noreferrer"
              key={item.title}
              href={item.link}
              title={item.description}
              className={styles.item}
              target="_blank"
              onClick={(e) => onPush(item.link, e)}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
