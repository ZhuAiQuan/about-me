export default async function handler(req, res) {
  const params = {
    page: 1,
    size: 20,
    businessType: "blog",
    username: "ZhuAiQuan",
  };
  // 请求参数处理
  if (req.method === "GET" && Object.keys(req.query).length) {
    for (const key in req.query) {
      if (params.hasOwnProperty(key)) params[key] = req.query[key];
    }
  } else if (req.method === "POST") {
    const temp = Object.fromEntries(
      req.body
        .split("Content-Disposition: form-data; name=")
        .map((item) => {
          const end = item.indexOf("-");
          return item
            .substring(0, end)
            .replaceAll("\n", "")
            .replaceAll("\r", "")
            .split('"')
            .filter((item) => item);
        })
        .filter((item) => item.length)
    );
    if (Object.keys(temp).length) {
      for (const key in temp) {
        if (params.hasOwnProperty(key)) params[key] = temp[key];
      }
    }
  }
  // 处理参数
  const link = Object.entries(params).reduce(
    (pre, next, i, that) =>
      (pre += `${next[0]}=${next[1]}${i + 1 !== that.length ? "&" : ""}`),
    "?"
  );
  const { data } = await fetch(
    `https://blog.csdn.net/community/home-api/v1/get-business-list${link}`
  ).then((res) => res.json());
  return res.status(200).json({
    code: 200,
    ...data,
  });
}
