import { useState } from 'react'

function CakeForm({handleAddCake}) {

    const [formData, setFormData] = useState({
        flavor: '',
        size: '',
        image: '',
        price: 0,
    })

    function handleChange(e){

        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleAddCake(formData)
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Flavor: <input onChange={handleChange} type="text" name="flavor"/>
            </label>
            <br />
            <label>
                Image: <input onChange={handleChange} type="text" name="image"/>
            </label>
            <br />
            <label>
                Size: <input onChange={handleChange} type="text" name="size"/>
            </label>
            <br />
            <label>
                Price: <input onChange={handleChange} type="number" name="price"/>

            </label>
            <br />
            <input onChange={handleChange} type="submit"></input>
        </form>
    )
}

export default CakeForm;