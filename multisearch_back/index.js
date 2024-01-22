console.log("Hello World")

const http = require("http")
const fs = require('fs');
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };

    response.send(status);
});

app.get('/search', function (req, res) {

    //const results = [];
    //results = [results, search("equipments.json", req.query.key)];
    const files = [
        "equipments.json",
        "materials.json",
        "purchase_orders.json",
        "sales_orders.json",
        "workforce.json"
    ];

    let results = {};

    for (let file of files) {
        //console.log(file);
        results[file.split('.')[0]] = search(file, req.query.key.toString().toLowerCase());
    }
    console.log("- Searching for", req.query.key.toString().toLowerCase());
    console.log(results);
    res.end(JSON.stringify(results));



})

function search(file, toSearch) {

    let localResult = [];
    let localData;
    
    data = fs.readFileSync(__dirname + "/data/" + file, 'utf8');

        let localDatas = JSON.parse(data);

        const results = [];

        //console.log(toSearch);
        for (let localData of localDatas) {
            //console.log(localData);
            for (let key in localData) {
                if (localData[key].toString().toLowerCase().includes(toSearch)) {
                    localResult.push(localData);
                    break;
                }
            }
        }
        
    return localResult;
}


/*
const hostname = "localhost"
const port = 3333

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain")
    res.end("Hello World")
})

server.listen(port, hostname, () => {
    console.log("SERVIDOR RODANDO")
})*/