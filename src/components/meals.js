function Meals(){
    const todaysMeals =['Beans','spaghetti','chips']
    const mealList = todaysMeals.map((meal)=>{
        return <li>{meal}</li>
    })
    return(
        <div>
            <ul>
                {mealList}
            </ul>
        </div>
    )
}
export default Meals