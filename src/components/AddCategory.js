import { useState } from "react"

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChanged = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        if(inputValue.trim().length == 0){
            alert('you have to type something')
            return
        }
        
        setCategories(item => [inputValue, ...item])
        setInputValue('')
    }


    return (
        <form onSubmit={handleSubmit}>            
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChanged}
            />
        </form>
    )

}

export default AddCategory