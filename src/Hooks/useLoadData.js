import axios from "axios";
import { useEffect, useState } from "react"

const useLoadData=()=>{
const [data,setData]=useState([]);
const [error,setError]=useState('')
const [loading,setLoading]=useState(true)

useEffect(()=>{
    try {
axios('/appData.json').then(res=>setData(res.data))
} catch (error) {
    setError(error)
}finally{
    setLoading(false)
}
},[])

return {data,error,loading}

}

export default useLoadData