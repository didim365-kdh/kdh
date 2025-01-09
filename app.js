const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const imageUrl = 'https://www.chorock.co.kr/assets/images/ogimage.png';
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Image Display</title>
        </head>
        <body>
            <h1>Here is your image:</h1>
            <img src="${imageUrl}" alt="Sample Image" style="max-width:100%; height:auto;">
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
