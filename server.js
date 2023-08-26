// import express from "express";

const express = require('express');
const app = express();
const PORT = 8080;


// Server side rendering
// req = request
// res = response
app.get("/", (req, res) => {
    res.send("Hello to our server!");
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
 
/*
    Javascript ES6
    + Array methods: map(), reduce(), find(). findIndex(), some(), every()
    + arrow function, destructuring 
*/
