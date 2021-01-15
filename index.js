const express = require('express');
const app = express();

const users=["jaber","Jony","jhjhj"];

app.get('/',(req,res)=>{
    const fruit ={
        product:"kola",
        price:78
    }
    res.send(fruit);
});

app.get("/fruits",(req,res)=>{
    res.send({fruit:'orange',price:56});
})
app.get("/fruits/banana",(req,res)=>{
    res.send({fruit:'banana',quantity:1000, price:199999});
})

app.get('/user/:id',(req,res)=>{
   const id =req.params.id;
   const name = users[id];
   res.send({name,id});
})
app.listen(3000,()=> console.log("listening to 3000"));