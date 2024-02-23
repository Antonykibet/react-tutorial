import { useContext} from "react"
import { userContext } from "../contexts.js"
function ContextExample(){
    const user = useContext(userContext)
    return(
       <>
            <h1>Who is {user}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquid vitae nihil eveniet a obcaecati! Excepturi fugiat officiis doloribus alias maxime est,
                 ullam quos eos magnam. Autem aspernatur excepturi explicabo obcaecati!Lorem Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Voluptatum recusandae illum fugit voluptatibus iusto libero blanditiis delectus ad officia officiis. 
                Numquam amet corrupti tempore a quos rerum ipsam saepe accusamus. 
            </p>
            <p>Written by {user}</p>
       </>
    )
}
export default ContextExample