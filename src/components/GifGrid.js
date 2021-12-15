import { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGif()
    }, [])

    const getGif = async () => {

        const url = 'http://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=4&api_key=BiJC2KNUNfnKN1JKYKg6b7pz5CNJ7piG'
        const res = await fetch(url)
        const { data } = await res.json()

        const BDgif = data.map(item => {
            return {
                id: item.id,
                title: item.title,
                image: item.images.downsized_medium.url
            }
        })


        setImages(BDgif)
    }




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