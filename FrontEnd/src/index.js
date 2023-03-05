import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"))
app.use(express.json())

app.get("/info/:dynamic", (req, res) => {
    const {dynamic} = req.params
    const {key} = req.query
    console.log(dynamic, key)
    res.status(200).json({info: "Some Text"})
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
