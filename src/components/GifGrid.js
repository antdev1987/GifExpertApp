import {useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({category})=>{
    const [images, setImages] = useState([])
    console.log(category)

    useEffect(()=>{
        imageFun()
    },[])

    const imageFun = async() =>{

        
        const url = 'http://api.giphy.com/v1/gifs/search?q=fairy+tail&limit=10&api_key=BiJC2KNUNfnKN1JKYKg6b7pz5CNJ7piG'
    
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
        setImages(dataImge)
    }

  

    return (
        <div>

        
       <ol>
           {images.map((item)=>(
               <GifGridItem key={item.id} {...item} />
           ))}
       </ol>

        </div>

    )

}

export default GifGrid