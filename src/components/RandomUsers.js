import { useEffect, useState } from "react"

function RandomUsers(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5')
            .then(response=>response.json())
            .then(result=>setUsers(result.results))
    },[])
    console.log(users.length)
    return(
        <>
        {
        users.length>0 ?
            <ul>
                {
                    users.map(function(user){
                        return <li>{`${user.name.first} ${user.name.last} Country:${user.location.country}`}</li>}
                    )
                }
            </ul>
            :<h3>No users at the moment...</h3>  }
        </>
    )
}
export default RandomUsers