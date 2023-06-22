import axios from "axios"

const url = "http://localhost:8000" 

export const getUser = async (id) => {
    try{
        return await axios.get(`${url}/${id}`)
    }  catch(error){
        console.log("Error while calling adduser api ", error)
    }
}