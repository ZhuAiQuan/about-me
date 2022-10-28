import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from '../components/about'

export default function Home({ background, info }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>朱艾全的个人简历</title>
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
            <About />
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
  const info = {
    name: "朱艾全",
    job: '前端开发',
    com: "深圳罗马仕科技有限公司",
    link: "http://www.7000mall.com/home",
    like: "喜欢唱、跳、rap和篮球。music~",
    avatar: "/assets/avatar.jpg",
    connect: [
      {
        key: "csdn",
        link: "https://blog.csdn.net/ZhuAiQuan",
      },
      {
        key: "github",
        link: "https://github.com/ZhuAiQuan",
      },
      {
        key: "wechat",
        qrcode: "/assets/qrcode.jpg",
      },
    ],
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
      info,
    },
  };
}
