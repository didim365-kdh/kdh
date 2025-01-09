const express = require('express'); 

const app = express(); 

const port = 8080; 

  

app.get('/image', (req, res) => { 

    const imageUrl = req.query.url || ' https://www.chorock.co.kr/assets/images/ogimage.png; // 기본값 설정 

    res.send(` 

        <!DOCTYPE html> 

        <html lang="en"> 

        <head> 

            <meta charset="UTF-8"> 

            <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

            <title>Dynamic Image</title> 

        </head> 

        <body> 

            <h1>Dynamic Image:</h1> 

            <img src="${imageUrl}" alt="Dynamic Image" style="max-width:100%; height:auto;"> 

        </body> 

        </html> 

    `); 

}); 

  

app.listen(port, () => { 

    console.log(`App running on http://localhost:${port}`); 
