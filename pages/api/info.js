export default function handler(req, res) {
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
  };
  return res.status(200).json({ info, about });
}
