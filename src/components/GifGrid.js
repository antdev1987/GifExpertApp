import { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'
import {imageFun} from '../helper/GetGifs'

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])
    console.log(category)

    useEffect(() => {
        imageFun(category)
       .then(data => setImages(data))
    }, [])

   

    return (

        <>
            <h2>{category}</h2>

            <div  className='card'>
                
                    {images.map((item) => (
                        <GifGridItem key={item.id} {...item} />
                    ))}
                
            </div>

        </>
    )

}

export default GifGrid