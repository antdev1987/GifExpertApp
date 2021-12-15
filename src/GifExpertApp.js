import {useState} from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp =()=>{


    const [categories, setCategories] =useState(['one punch','samurai x', 'dragon ball'])

  

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
      
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