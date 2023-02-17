import fetch from "node-fetch"
import express from "express"
var app = express();
const port = 9000
var url = "https://jsonplaceholder.typicode.com/todos/"
app.get('/', async (req, res) => {
    fetch(url)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: `Internal Server Error.` });
    }
})

app.listen(port, () => {
    console.log(`listening on port : ${port}`)
})