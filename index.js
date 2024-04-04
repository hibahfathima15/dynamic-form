const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FormModel = require("./models/Form");
const DynamicModel = require("./models/DynamicForm")

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log("Server is Running");
});

mongoose.connect(process.env.MONGO_URL).then((res) => {
  console.log("DB connection successful");
});

app.post("/store-data",async (req, res) => {
    try{
        const data = req.body;
        const newForm = new FormModel({
            formData:data,
        })
        await newForm.save();
        res.status(200).json({message:"Submitted Successfully"})
    }catch(error){
        res.status(500).json({error:"SERVER ERRROR"})
    }

});

app.post("/create-dynamic-form",async (req, res) => {
    try{
        const {name,data} = req.body;
        const newForm = new DynamicModel({
            name,
            formData:data,
        })
        await newForm.save();
        res.status(200).json({message:"Submitted Successfully"})
    }catch(error){
        res.status(500).json({error:"SERVER ERRROR"})
    }

});

app.get("/get-dynamic-form/:id", async (req, res) => {
    try {
        const formId = req.params.id;
        const dynamicForm = await DynamicModel.findById(formId);

        if (!dynamicForm) {
            return res.status(404).json({ error: "Form not found" });
        }

        res.status(200).json(dynamicForm);
    } catch (error) {
        res.status(500).json({ error: "SERVER ERROR" });
    }
});

