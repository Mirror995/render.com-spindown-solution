const express =require('express');
const axios = require('axios');
const app = express();

function reloadWebsite(a) {
  axios.get(a)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
  }

app.use((req, res, next) => {
  setTimeout(function() {
  console.log('等了一会');
  const url2 = `https://spindown-solution-d7wv.onrender.com/`;
  reloadWebsite(url2)
}, 30000);
  const url = `https://mdict.onrender.com/`;
  reloadWebsite(url)
  next();
});

const port = 3000;
app.listen(port, () => {
  setTimeout(function() {
    console.log('等了一会');}, 30000);
  console.log(`服务器正在 http://localhost:${port} 上运行`);
  const url2 = `https://spindown-solution-d7wv.onrender.com/`;
  reloadWebsite(url2)
});