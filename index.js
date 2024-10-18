const express =require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
  const url = `https://mdict.onrender.com/`;
  const url2 = `https://spindown-solution-d7wv.onrender.com/`;
  const interval = 30000;
  axios.get(url)
  axios.get(url2)
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`服务器正在 http://localhost:${port} 上运行`);
});