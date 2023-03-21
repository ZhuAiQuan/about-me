import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../components/about";
import { useEffect, useState } from "react";

export default function Home({ background }) {
  const [info, setInfo] = useState(() => ({
    name: "",
    job: "",
    com: "",
    link: "",
    like: "",
    avatar: "",
    connect: [],
  }));
  const [about, setAbout] = useState(() => ({
    intro: "",
    project: [],
    privateProject: [],
  }));
  async function requestInfo() {
    const { info, about } = await fetch("/api/info").then((res) => res.json());
    setInfo(info);
    setAbout(about)
  }
  useEffect(() => {
    requestInfo();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>{info.name}的个人简历</title>
        <meta name="description" content="resume webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${background.url})` }}
        ></div>
        <div className={styles.layouts}>
          <div className={styles.left}>
            <div className={styles.info}>
              <div
                className={styles.cover}
                style={{ backgroundImage: `url(${info.avatar})` }}
              ></div>
              <div className={styles.name}>
                {info.name} · <span className={styles.job}>{info.job}</span>
              </div>
              <div className={styles.subTitle}>
                现就职于
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  {info.com}
                </a>
              </div>
              <div className={styles.intro}>{info.like}</div>
              <div className={styles.connect}>
                {info.connect.map((item) => {
                  if (item.qrcode) {
                    return (
                      <div key={item.key} className={styles.wechat}>
                        <svg className="icon tab" aria-hidden="true">
                          <use xlinkHref={`#icon-${item.key}`}></use>
                        </svg>
                        <div
                          className={styles.hover}
                          style={{ backgroundImage: `url(${item.qrcode})` }}
                        ></div>
                      </div>
                    );
                  } else {
                    return (
                      <a
                        key={item.key}
                        href={item.link}
                        target="_blank"
                        title={item.key}
                        rel="noopener noreferrer"
                      >
                        <svg className="icon tab" aria-hidden="true">
                          <use xlinkHref={`#icon-${item.key}`}></use>
                        </svg>
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <About {...about} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { images } = await fetch(
    "https://bird.retiehe.com/cache/bing.json"
  ).then((res) => res.json());
  const background = {
    url: "",
    copyright: "",
    title: "",
  };

  if (images.length) {
    const { url, copyright, title } = images[0];
    background.url = `https://cn.bing.com${url}`;
    background.copyright = copyright;
    background.title = title;
  }
  return {
    props: {
      background,
    },
  };
}
