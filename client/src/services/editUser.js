import axios from "axios"

const url = "http://localhost:8000"

export const editUser = async (User,id) => {
    
    try{
        return await axios.post(`${url}/${id}`, User)
    }catch(error){
        console.log("Error while fetching update api")
    }

}