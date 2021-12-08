import {useState} from 'react'
import ProptTypes from 'prop-types'

const AddCategory =({setCategories})=>{

    const [inputValue, setInputValue] = useState('hola mundo')

    const handleInputChange =(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('done')
        setCategories((cat)=>{
            return [inputValue, ...cat]
        })
    }



    return (
        
         <form onSubmit={handleSubmit}>

             <input type='text' onChange={handleInputChange} />
        
         </form>
     )

}

AddCategory.propTypes={
    setCategories:ProptTypes.func.isRequired
}

export default AddCategory