const express =require('express');
const axios = require('axios');

app.use((req, res, next) => {
  const url = `https://mdict.onrender.com/`;
  const interval = 30000;
  function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
  }
  setInterval(reloadWebsite, interval);
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`服务器正在 http://localhost:${port} 上运行`);
});