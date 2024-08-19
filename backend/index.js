const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());
app.post('/todo', async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You send the Wrong Inputs",
        })
        return;
    }

   await todo.create({
        tittle : createPayload.tittle,
        description : createPayload.description,
        completed : false,
    })

    res.json({
        msg:"Todo Created"
    })
})

app.get('/todos',async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed',async function(req,res){
        const updatePayload = req.body;
        const parsePayload=updateTodo.safeParse(updatePayload);
        if(!parsePayload.success){
            res.status(411).json({
                msg:"You send a Wrong Input",
            })
            return ;
        }

        await todo.update({
            _id : req.body.id
        },
        {
            completed : true
        })
        res.json({
            msg:"Todo Mark As Completed"
        })
})


app.listen(3000);