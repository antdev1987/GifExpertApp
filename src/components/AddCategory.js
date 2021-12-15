import { useState } from "react"

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChanged = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('done')
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