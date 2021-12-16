import {useState,useEffect} from 'react'
import Getgifs from '../components/helper/GetGifs'

const useFetchGifs =(category)=>{

    const [state,setState] = useState({
        data:[],
        loading:true
    })

    useEffect(()=>{

        const fetchAsync=async()=>{

            const dataImages = await Getgifs(category)
            setTimeout(() => {
                setState({
                    data:dataImages,
                    loading:false
                })
            }, 3000);

        }

        fetchAsync()

    },[category])

    return state

}

export default useFetchGifs