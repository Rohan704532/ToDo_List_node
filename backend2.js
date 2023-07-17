const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
const cors = require("cors");
app.use(cors());


dotenv.config({ path: './config.env' })
const PORT = process.env.PORT || 3000

app.use(express.static("build"))
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

DB = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-list-node.7lpais6.mongodb.net/`
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected with mongodb")
}).catch((err) => {
    console.log(err)
})

const todoSchema = mongoose.Schema({
    title: String
})

const list = new mongoose.model("List", todoSchema)

app.post('/add', async (req, res) => {
    try {
        const List = await list.create(req.body)
        res.status(200).json({
            success: true,
            List
        })
    } catch (err) {
        console.log(err)
    }
})

app.post('/addp', async (req, res) => {
    const { title } = req.body;
    try {
        const List = await list.updateOne({ $push: { $each: title, $position: 0 } })
        res.status(200).json({
            success: true,
            List
        })
    } catch (err) {
        console.log(err)
    }
})


app.get('/get', async (req, res) => {
    try {
        const todos = await list.find();
        res.status(200).json({ success: true, todos })
    } catch (err) {
        console.log(err)
    }
})

app.delete('/deleteId', async (req, res) => {
    try {
    todo = await list.find({ title: req.body.title })
        if (todo.length == 0) {
            return res.status(500).json({
                success: false,
                message: "Product not found"
            })
        } else {
            await list.deleteMany({ title: req.body.title })
            return res.status(200).json({
                success: true,
                message: "Product is deleted successfully"
            })
        }
    } catch (err) {
        console.log(err)
    }

})

app.delete('/deleteAll', async (req, res) => {
    try{
    const todos = await list.find();
    await list.deleteMany()

    if (todos.length == 0) {
        console.log("empty")
        return res.status(400).json({
            success: false,
            message: "Is Empty"
        })
    } else {
        res.status(200).json({
            success: true,
            message: "deleted all"
        })
    }
}catch(err){
    console.log(err)
}
})



app.listen(PORT, () => {
    console.log(`server is  working on ${PORT}`)
})