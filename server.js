const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 中間件
app.use(bodyParser.json());
app.use(express.static('public'));

// API 接收 userId
app.post('/api/save-user', (req, res) => {
  const { userId, name } = req.body;
  console.log(`收到使用者：${name} (${userId})`);

  // TODO: 可儲存進資料庫
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
