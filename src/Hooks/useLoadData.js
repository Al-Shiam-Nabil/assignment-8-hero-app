import axios from "axios";
import { useEffect, useState } from "react"

const useLoadData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios('/appData.json').then(res => { setData(res.data) }).catch(err => setError(err)).finally(() => setLoading(false))
    }, [])

    return { data, error, setError, loading, setLoading }

}

export default useLoadData