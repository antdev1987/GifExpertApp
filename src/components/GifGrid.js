import { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'
import getGifs from './helper/GetGifs'

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {

        async function fetchData(){
            const data =await getGifs(category)
            setImages(data)
        }
        fetchData()

    },[category])

    




    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>

                {
                    images.map(item => (
                        <GifGridItem
                            key={item.id}
                            {...item}
                        />
                    ))
                }

            </div>
        </>
    )

}

export default GifGrid 