import mongoose from "mongoose";
import express from "express";
import { Employes } from "./models/Company.js";
const app = express()
const port = 3000

// let conn = await mongoose.connect("mongodb://localhost:27017/todo")
mongoose.connect('mongodb://127.0.0.1/Company') //from https://www.mongodb.com/community/forums/t/i-am-getting-this-error-const-serverselectionerror-new-serverselectionerror/162573/4
app.use(express.static("public"));

let array_employees = [
  { name: "Harry", salary: 45000000, language: "Python", city: "New York", isManager: true },
  { name: "Alice", salary: 1200000, language: "Java", city: "San Francisco", isManager: false },
  { name: "Bob", salary: 950000, language: "JavaScript", city: "London", isManager: false },
  { name: "Charlie", salary: 2500000, language: "C++", city: "Berlin", isManager: true },
  { name: "David", salary: 1800000, language: "Ruby", city: "Tokyo", isManager: false },
  { name: "Emma", salary: 3000000, language: "Go", city: "Sydney", isManager: true },
  { name: "Frank", salary: 1700000, language: "Swift", city: "Toronto", isManager: false },
  { name: "Grace", salary: 2100000, language: "PHP", city: "Paris", isManager: true },
  { name: "Henry", salary: 1400000, language: "TypeScript", city: "Dubai", isManager: false },
  { name: "Isabel", salary: 2600000, language: "Rust", city: "Amsterdam", isManager: true }
];

// Serve static files (like HTML, CSS)

// Handle button click request
app.get("/generate", async (req, res) => {
  await Employes.deleteMany({}) 

  for (let index = 0; index < 10; index++) {
    const employe = new Employes(array_employees[Math.floor(Math.random() * array_employees.length)])
    //random array index generator 
    // var item = items[Math.floor(Math.random()*items.length)];
    // 
    
    await employe.save()
    console.log(employe)
  }
  res.send("Button Clicked!");
});






app.get('/', (req, res) => {
// const employe = new Employes( { name: "Harry", salary: 45000000, language: "Python", city: "New York", isManager: true },{ name: "Alice", salary: 1200000, language: "Java", city: "San Francisco", isManager: false })


  res.send('Hi  World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
