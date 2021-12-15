import {useState} from 'react'

const GifExpertApp =()=>{


    const [categories, setCategories] =useState(['one punch','samurai x', 'dragon ball'])

    const handleAdd =()=>{
        setCategories(item => ['fairy tali', ...item])
    }


    return(
        <>
        <h2>GifExpertApp</h2>
        <hr />

        <button onClick={handleAdd}>Agregar</button>

        <ol>
            {
                categories.map(category=>{
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
        </>
    )

}

export default GifExpertApp