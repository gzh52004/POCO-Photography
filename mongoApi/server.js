const express = require('express');
const { PORT } = require('./config.json');
const allRouter = require('./router/');
const app = express();

// 静态资源服务器、处理数据格式(键值对、json)
app.use(express.static('./'));

app.use(allRouter);


app.listen(PORT, () => {
    console.log(`后端服务器已启动，端口号${PORT}`);
})