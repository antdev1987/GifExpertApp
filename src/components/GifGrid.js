import {useState, useEffect } from 'react'

const GifGrid = ({category})=>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        imageFun()
    },[])

    const imageFun = async() =>{

        
        const url = 'http://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=5&api_key=BiJC2KNUNfnKN1JKYKg6b7pz5CNJ7piG'
    
        const response = await fetch(url)
        const {data} = await response.json()


        const dataImge = data.map((item)=>{
            return {
                id:item.id,
                title:item.title,
                url: item.images.downsized_medium.url
            }
        })
    
        console.log(dataImge)
    }

  

    return (
        <div>

        <h3>{count}</h3>
        <h3>{category}</h3>

        <button onClick={ ()=>setCount(count + 1)}>click</button>

        </div>

    )

}

export default GifGrid