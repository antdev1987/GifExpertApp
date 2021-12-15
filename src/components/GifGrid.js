import {useEffect} from 'react'

const GifGrid = ({ category }) => {

    
    useEffect(()=>{
        getGif()
    },[])
    
    const getGif =async()=>{
        
        const url = 'http://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=5&api_key=BiJC2KNUNfnKN1JKYKg6b7pz5CNJ7piG'
        const res = await fetch(url)
        const {data} = await res.json()

        const BDgif = data.map(item =>{
            return {
                id:item.id,
                title:item.title,
                image:item.images.downsized_medium.url
            }
        })

        console.log(data)
        console.log(BDgif)
    }




    return (
        <h3>{category}</h3>
    )

}

export default GifGrid 