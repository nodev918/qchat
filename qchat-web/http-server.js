import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url';

const app = express()
const PORT = process.env.PORT || 5000


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static('dist'))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'dist','index.html'))
    
})


app.listen(PORT,()=>{
    console.log("server is running on " , + PORT)
})