const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    listCtrl = require('./controller/listCtrl'),
    port = 4000;

app.use(bodyParser.json());

app.get('/api/list', listCtrl.getList)
app.post('/api/list', listCtrl.add)
app.put('/api/list', listCtrl.update)
app.delete('/api/list/:index', listCtrl.remove)

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})