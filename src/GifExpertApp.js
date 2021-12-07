import { useState } from 'react'


const GifExpertApp = () => {

   const [categories, setCategories] = useState(['one puch', 'samurai x', 'dragon ball'])

    const handleAdd =()=>{
        //setCategories(['hunter', ...categories])
        setCategories( cats=>{
            return [...cats, 'hunter']
        })
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />

            <button onClick={handleAdd}>agregar</button>
            
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )

}


export default GifExpertApp