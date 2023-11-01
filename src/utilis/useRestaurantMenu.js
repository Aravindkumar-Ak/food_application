import  { useEffect, useState } from 'react'
import { API_URL } from './constants'

const useRestaurantMenu = (id) => {
const[restInfo,setRestInfo]=useState(null)

useEffect(()=>{

    fetchApi()
},[])

const fetchApi=async()=>{
    const data=await fetch( API_URL+id);
    const json=await data.json();
setRestInfo(json)
console.log(json);

}

  return restInfo;
}

export default useRestaurantMenu