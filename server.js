require('dotenv').config();
const path = require('path')
const mongoose = require('mongoose');
const createSchemaSignUp = require('./DBmodel/signUpSchemaCreator.js');
const createSchemaregister = require('./DBmodel/registerSchemaCreator.js');
const createSchemaadminFeedBack = require('./DBmodel/adminFeedBackSchemaCreator.js');
const ejs = require('ejs');
const http = require('http');
const express = require('express')
const websocket = require('ws')
const app = express();
const fs = require('fs')
const server = http.createServer(
    // {
    //     'key':fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    //     'cert':fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
    // },
    app);
const wss = new websocket.Server({server});
const router = require('./peripheralFolders/router.js');
const bodyParser = require('body-parser');
// const connectMoongoose = require('./connect/connectMDb.js')
const urlencoded = bodyParser.urlencoded({extended:false})
const port = process.env.PORT || 9000


app.use('/',new router(express,path,urlencoded,mongoose,wss,createSchemaSignUp,createSchemaregister,createSchemaadminFeedBack,server,port).router);
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/staticFiles'));
app.use(express.static(__dirname+'/staticFiles/page5'))
app.use(express.static(__dirname+'/staticFiles/page1'))
app.use(express.static(__dirname+'/staticFiles/page2'))
app.use(express.static(__dirname+'/staticFiles/page3'))
app.use(express.static(__dirname+'/staticFiles/page6'))
app.use(express.static(__dirname+'/staticFiles/page4Reg'))
app.use(express.static(__dirname+'/staticFiles/admin'))
app.use(express.static(__dirname+'/staticFiles/dashboard'))
app.use(express.static(__dirname+'/staticFiles/adminRequest'))
app.set('view engine', 'ejs')
console.log(websocket)