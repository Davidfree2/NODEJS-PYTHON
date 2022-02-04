//npm inits----------------------------
const express = require('express');
const multer = require('multer');

//express inits----------------------------
const app = express();
const port = 5000;

//multer inits----------------------------

const storageex = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, __dirname + '/uploads')
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storageex});

//paths [get and post]----------------------------

app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/static/success'))
app.use(express.static(__dirname + '/static/failure'))
//see uploaded files

app.post('/upload', (req,res)=>{
    upload.single('file')(req,res,(error)=>{
        if (error instanceof multer.MulterError){
            res.sendFile(__dirname + '/static/failure/error.html')
        } else if (error) {
            res.sendFile(__dirname + '/static/failure/error.html')
        } else {
            res.sendFile(__dirname + '/static/success/success.html')
        }
    })
})

//listening----------------------------

app.listen(port, ()=>console.log('NODE JS SERVER LISTENING ON PORT:' + port))
