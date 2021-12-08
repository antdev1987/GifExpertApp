import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['one puch', 'samurai x', 'dragon ball'])

    // const handleAdd =()=>{
    //     //setCategories(['hunter', ...categories])
    //     setCategories( cats=>{
    //         return [...cats, 'hunter']
    //     })
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
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