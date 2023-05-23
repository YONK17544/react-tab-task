import axios from "axios";
const DATABASE_URL= 'https://dummyjson.com/'

export const getData=async(url)=>{
 const response=await axios.get(DATABASE_URL + url)
 return response
}