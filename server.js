const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// ⬇️ 取出環境變數中的多個來源，變成陣列
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',');

// ⬇️ CORS 設定：僅允許在清單中的網域
app.use(cors({
  origin: function (origin, callback) {
    // 如果請求沒有 origin（例如 curl），也允許
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS 禁止：來源 ${origin} 不被允許`));
    }
  }
}));


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
