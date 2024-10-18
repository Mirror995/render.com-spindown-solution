const express =require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
  setTimeout(function() {
    console.log('等了一会');}, 30000);
  const url = `https://mdict.onrender.com/`;
  const url2 = `https://spindown-solution-d7wv.onrender.com/`;
  function reloadWebsite(a) {
  axios.get(a)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
  }
  reloadWebsite(url)
  reloadWebsite(url2)
  next();
});

const port = 3000;
app.listen(port, () => {
  console.log(`服务器正在 http://localhost:${port} 上运行`);
});