const express = require('express');
const app = express();
const port = 8080;

// '/' 요청 시 리다이렉트
app.get('/', (req, res) => {
    res.redirect('https://www.chorock.co.kr/page/ai-saas.html');
});

// 서버 실행
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
