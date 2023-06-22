import express from 'express'
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from "cors"

const app =  express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(cors())

const PORT = 8000

mongoose.connect('mongodb+srv://shreyask003:shrutiyasshre2003@CRUD-APPLICATION.fjdwljc.mongodb.net/?retryWrites=true&w=majority')

const schema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone: String
})

const User = mongoose.model('user',schema)

app.post("/add", (req,res)=>{
    const user = req.body
    const newuser=User(user)
    newuser.save()
})

app.get('/all', async (req, res)=>{
    const user = await User.find({})
    res.status(200).json(user)
})

app.get('/:id', async (req, res)=>{
    const user = await User.findById({_id:req.params.id})
    res.status(200).json(user)
})

app.post('/:id', async (req,res) => {
    const user = req.body
    const newuser = User(user)
    try{
        await User.updateOne({_id:req.params.id},newuser)
    }catch(error){
        console.log("While updatinf query")
    }
})

app.delete('/:id', async (req,res) => {
    try{
        console.log(req.params.id)
        await User.deleteOne({_id:req.params.id})
    }catch(error){
        console.log(error)
    }
})

app.listen(PORT, console.log("Live on ",PORT))