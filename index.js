const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const {router}=require("./routes/users")
app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())
app.use('/',router)
const Port = 2022;
app.listen(Port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${Port}`);
})
