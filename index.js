const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// const sendingData = client.db('').collection('');

// app.post('/sentData', async(req,res) =>{
//     const sentmyData = req.body;
//     const result = await sendingData.insertOne(sentmyData);
//     res.send(result); 
//    });


  
app.get('/',(req,res)=>{
    res.send('My Exam Server is running')
}) 

app.listen(port, ()=>{
    console.log(`My Exam server running on ${port}`)
})