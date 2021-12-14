import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

   const [categories, setCategories] = useState(['one punch'])

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
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>
    )

}


export default GifExpertApp