import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../components/about";
import { useEffect, useState } from "react";

export default function Home({ background }) {
  // const [info, setInfo] = useState(() => ({
  //   name: "",
  //   job: "",
  //   com: "",
  //   link: "",
  //   like: "",
  //   avatar: "",
  //   connect: [],
  // }));
  // const [about, setAbout] = useState(() => ({
  //   intro: "",
  //   project: [],
  //   privateProject: [],
  // }));
  // async function requestInfo() {
  //   const { info, about } = await fetch("/api/info").then((res) => res.json());
  //   setInfo(info);
  //   setAbout(about)
  // }
  // useEffect(() => {
  //   requestInfo();
  // }, []);
  const info = {
    name: "朱艾全",
    job: "前端开发",
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
  const about = {
    intro: `${
      new Date().getFullYear() - 2018
    }年+前端开发经验，熟练使用Vue/React全家桶开发，JavaScript基本功扎实，熟悉typescript和Node.js,熟练使用koa/express等后端服务框架。`,
    project: [
      {
        title: "官网后台管理系统",
        description:
          "使用React18+TypeScript开发，基于vite3.0构建的配合官网使用的一个后台管理系统。",
        link: "https://work.romoss.com/login",
      },
      {
        title: "企业官网（海外）",
        description: "使用vue3+pinia+vue-cli构建的企业官网。",
        link: "https://www.romoss.com/home",
      },
      {
        title: "钉钉H5微服务-ehr员工自助系统",
        description:
          "使用vue3+typescript+vite2.0构建的内部员工使用的自助系统。",
        link: "http://ehrfront.7000mall.com",
      },
      {
        title: "企业官网-移动端",
        description: "使用nuxt2开发的企业官网，支持ssr搜索引擎优化。",
        link: "m.romoss.com",
      },
      {
        title: "123odm商城",
        description: "使用vue2+typescript开发的企业商城网站。",
        link: "http://123odm.cn",
      },
      {
        title: "微信小程序-商品展示",
        description: "使用微信小程序开发的企业商品展示信息展示",
        link: "",
      },
    ],
    privateProject: [
      {
        title: "卖座电影h5移动端",
        description: "分别使用vue2/vue3/react构建的防卖座电影网站",
        link: [
          "https://vue-maizuo.vercel.app",
          "https://films-zeta.vercel.app",
          "https://react-movies-nine.vercel.app",
        ],
      },
      {
        title: "好看视频api",
        description: "使用Koa构建的百度家好看视频api接口服务。",
        link: "https://hkvideo.vercel.app",
      },
    ],
    link: [
      {
        avatar: "/assets/cs.jpg",
        name: "好巧.",
        link: "https://blog.csdn.net/weixin_43233914"
      },
      {
        avatar: "/assets/ls.jpg",
        name: "Blau",
        link: "https://blog.csdn.net/weixin_43930641"
      },
      {
        avatar: "/assets/lz.jpg",
        name: "麦客子",
        link: "https://blog.csdn.net/a911711054"
      }
    ]
  };
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
    "https://bird.limestart.cn/cache/bing.json"
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
