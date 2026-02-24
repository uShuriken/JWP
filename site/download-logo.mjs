import fs from 'fs';
import https from 'https';

const url = "https://www.joannewilliamsphysiotherapy.co.nz/wp-content/uploads/2021/08/Joanne-Williams-Physio-Logo-1.png";

https.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
}, (res) => {
    if (res.statusCode === 200) {
        const file = fs.createWriteStream("public/logo.png");
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log("Logo downloaded successfully");
        });
    } else {
        console.error(`Failed to download: ${res.statusCode}`);
    }
}).on('error', (err) => {
    console.error(err);
});
