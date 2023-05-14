const express = require('express')
const app = express()

const 
foodData = 
[
  {
    "id": 1,
    "foodname": "Apple",
    "calorie": 95,
    "category": "Fruit",
    "protiens": 0.3,
    "cab": 25
  },
  {
    "id": 2,
    "foodname": "Banana",
    "calorie": 105,
    "category": "Fruit",
    "protiens": 1.3,
    "cab": 27
  },
  {
    "id": 3,
    "foodname": "Orange",
    "calorie": 62,
    "category": "Fruit",
    "protiens": 1.2,
    "cab": 15
  },
  {
    "id": 4,
    "foodname": "Pear",
    "calorie": 95,
    "category": "Fruit",
    "protiens": 0.5,
    "cab": 25
  },
  {
    "id": 5,
    "foodname": "Grapefruit",
    "calorie": 42,
    "category": "Fruit",
    "protiens": 1.1,
    "cab": 11
  },
  {
    "id": 6,
    "foodname": "Strawberry",
    "calorie": 46,
    "category": "Fruit",
    "protiens": 1.5,
    "cab": 10
  },
  {
    "id": 7,
    "foodname": "Blueberry",
    "calorie": 52,
    "category": "Fruit",
    "protiens": 1.1,
    "cab": 14
  },
  {
    "id": 8,
    "foodname": "Raspberry",
    "calorie": 52,
    "category": "Fruit",
    "protiens": 1.4,
    "cab": 15
  },
  {
    "id": 9,
    "foodname": "Broccoli",
    "calorie": 34,
    "category": "Vegetable",
    "protiens": 3.3,
    "cab": 5
  },
  {
    "id": 10,
    "foodname": "Cauliflower",
    "calorie": 25,
    "category": "Vegetable",
    "protiens": 2.6,
    "cab": 5
  },
  {
    "id": 11,
    "foodname": "Green Beans",
    "calorie": 31,
    "category": "Vegetable",
    "protiens": 2.4,
    "cab": 4
  },
  {
    "id": 12,
    "foodname": "Asparagus",
    "calorie": 20,
    "category": "Vegetable",
    "protiens": 2.2,
    "cab": 2
  },
  {
    "id": 13,
    "foodname": "Spinach",
    "calorie": 23,
    "category": "Vegetable",
    "protiens": 3.5,
    "cab": 4
  },
  {
    "id": 14,
    "foodname": "Kale",
    "calorie": 33,
    "category": "Vegetable",
    "protiens": 4.3,
    "cab": 7
  },
  {
    "id": 15,
    "foodname": "Sweet Potato",
    "calorie": 103,
    "category": "Vegetable",
    "protiens": 2,
    "cab": 27
  },
  {
    "id": 16,
    "foodname": "Potato",
    "calorie": 161,
    "category": "Vegetable",
    "protiens": 4.3,
    "cab": 37
  },
  {"id": 17,
    "foodname": "Carrot",
    "calorie": 41,
    "category": "Vegetable",
    "protiens": 0.9,
    "cab": 9
  },
  {
    "id": 18,
    "foodname": "Onion",
    "calorie": 40,
    "category": "Vegetable",
    "protiens": 1.4,
    "cab": 9
  },
  {
    "id": 19,
    "foodname": "Egg",
    "calorie": 77,
    "category": "Protein",
    "protiens": 6.3,
    "cab": 0.5
  },
  {
    "id": 20,
    "foodname": "Chicken Breast",
    "calorie": 165,
    "category": "Protein",
    "protiens": 31,
    "cab": 0
  }
]

const date = Date()

app.get("/all", (req, res)=>{
    res.json(foodData)
})

app.get("/health-api", (req, res) => {
    res.json(
        {
            time: date.substring(16, 24),
            app: "express-server",
            status: "active"
        }
    )
})

app.get("/vegetable", (req, res) => {
    res.json(
        foodData.filter((item)=>{
            if(item.category=="Vegetable")
            return item
        })        
    )
})

app.get("/fruit", (req, res)=>{
    res.json(
        foodData.filter((item)=>{
            if(item.category=="Fruit")
            return item
        })
    )
})

app.get("/Protein", (req, res)=>{
    res.json(
        foodData.filter((item)=>{
            if(item.category=="Protein")
            return item
        })
    )
})

app.get("/calorie-above-100", (req, res)=>{
    res.json(
        foodData.filter((item)=>{
            if(item.calorie>100)
            return item
        })
    )
})

app.get("/calorie-below-100", (req, res)=>{
    res.json(
        foodData.filter((item)=>{
            if(item.calorie<100)
            return item
        })
    )
})

app.listen(3100, ()=>{
    console.log("Sever is running on the port 3100.")
})