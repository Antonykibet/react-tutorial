import React, { useState } from "react"
const MealsContext = React.createContext()
function Meals(){
    const todaysMeals =['Beans','spaghetti','chips']
    const [meals,setMeals] = useState(todaysMeals)
}