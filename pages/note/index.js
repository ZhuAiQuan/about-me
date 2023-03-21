import { useEffect, useState } from "react";
import styles from './index.module.css'

export default function Index() {
  const intro = {
    js_basic: "javascript基础面试题",
    react_basic: "react基础面试题",
    css_basic: "css基础面试题",
    http_basic: "http基础面试题",
    vue_basic: "vue基础面试题",
    build: "项目打包构建相关面试题",
  };
  const [note, getNote] = useState(() => {
    const note = {};
    Object.keys(intro).forEach((key) => (note[key] = []));
    return note;
  });
  const [context, getCtx] = useState('');
  async function requestData() {
    const { js_basic, react_basic, css_basic, http_basic, vue_basic, build } =
      await fetch("/api/note", { method: "post" }).then((res) => res.json());
    getNote({ js_basic, react_basic, css_basic, http_basic, vue_basic, build });
  };
  function feedBack() {
    alert('功能完善中！')
  }
  useEffect(() => {
    requestData();
  }, []);
  return <div className={styles.container}>
    <div className={styles.left}>
      {
        Object.keys(intro).map(key => {
          return (
            <div className={styles.title_ctx} key={key}>
              <div className={styles.title}>{intro[key]}</div>
              <div className={styles.sub_title_ctx}>
                {
                  note[key].map(item => {
                    return (
                      <div className={item.content !== context ? styles.sub_title : styles.sub_title_actived} key={item.title} title={item.title} onClick={() => getCtx(item.content)}>{item.title}</div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
    <div className={styles.right}>
      <div className={styles.ctx}>
        <span>{context}</span>
      </div>
      <div className={styles.desc}>
        以上仅为个人粗鄙又浅薄的见解，轻喷，欢迎纠错！
      </div>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={feedBack}>交流反馈</button>
      </div>
    </div>
  </div>;
}
