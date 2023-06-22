import axios from "axios";

const url = "http://localhost:8000"

export const deleteUser = async (id) => {

    try{
        return await axios.delete(`${url}/${id}`)
    }catch(error){
        console.log("error while calling delete api",error)
    }

}