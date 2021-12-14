import React from 'react'

const GifGridItem =({id,title,url})=>{

    console.log(id)

    return (

        <div className='box'>

            <img src={url} alt={title} />
            <p>{title}</p>

        </div>

    )

}

export default GifGridItem