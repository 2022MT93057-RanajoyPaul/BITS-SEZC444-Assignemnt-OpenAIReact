//const express = require("express");
//const cors = require("cors");
//const bodyParser = require("body-parser");
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {

    const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        max_tokens: 100,
        messages: [{
            role: "user", content: `${prompt}` }],
            
    });
    console.log(completion.choices[0].message.content);
    res.send(completion.choices[0].message.content);

})
    const port = 8080;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);

    });





