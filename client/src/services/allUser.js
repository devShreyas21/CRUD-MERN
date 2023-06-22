import  axios  from 'axios'

const url = "http://localhost:8000"
export const allUser = async () => {
    try{
        return await axios.get(`${url}/all`)
    }catch(error){
        console.log("Error while calling api allUser",error)
    }
}