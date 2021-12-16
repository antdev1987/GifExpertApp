// import { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'
// import getGifs from './helper/GetGifs'

import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    const {data,loading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando...</p>}

            <div className='card-grid'>

                {
                    data.map(item => (
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
