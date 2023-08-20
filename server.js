
const express = require("express");
const qr = require ("qrcode");

const app = express();
app. use (express.json());

// to File
app.get ("/api/v1/get-qrcode", async (req, res) => {
    let data = { name: "Hi Counselor" };
    const str = JSON.stringify (data.name);
    qr. toFile("qr.png", str, (err) => { 
        if (err) console. log ("err");
    });
    res.send('qrcode');
});

// Data Unl
app.get("/api/v1/get-arcode", async (req, res) => {
    console.log("hello");
    let data = { name: "HI Counselor" };
    const str = JSON.stringify(data);
    qr.toDataURL(str, (err, data) => {
        if (err) console.log("err");
        res.send(`<img src=${data} />`).json({ qrcode: data });
    });
});

app.listen (5000, () => {
    console.log("server is runing on port 5000");
});