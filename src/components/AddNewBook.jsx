import { useState } from "react"

const AddNewBook = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "" ,
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: "",

    })

    const submitHandler = async (event) => {
        event.preventDefault()

        try{
            const res = await fetch(`https://backend-books-theta.vercel.app/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            console.log(res)
            if(!res.ok){
                console.log(res)
                throw "Failed to Add Book"
            }

            const data = await res.json()
            console.log("Added Book::", data)

        }catch(error){
            console.log(error)
        }



    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: name === "rating" || name === "releaseYear" ? Number(value) : value
        }) )

    }
    
    return (
        <div>

            <form onSubmit={submitHandler}>
            <label>Title:</label><br />
                <input type="text" value={formData.title} name="title" onChange={handleChange} /><br />

                <label>Author:</label><br />
                <input type="text" value={formData.author} name="author" onChange={handleChange} /><br />

                <label>Published Year:</label><br />
                <input type="number" value={formData.publishedYear} name="publishedYear" onChange={handleChange} /><br />

                <label>Genre:</label><br />
                <input type="text" value={formData.genre} name="genre" onChange={handleChange} /><br />

                <label>Language:</label><br />
                <input type="text" value={formData.language} name="language" onChange={handleChange} /><br />

                <label>Country:</label><br />
                <input type="text" value={formData.country} name="country" onChange={handleChange} /><br />

                <label>Rating:</label><br />
                <input type="number" value={formData.rating} name="rating" onChange={handleChange} /><br />

                <label>Summary:</label><br />
                <input type="text" value={formData.summary} name="summary" onChange={handleChange} /><br />

                <label>Cover Image Url:</label><br />
                <input type="text" value={formData.coverImageUrl} name="coverImageUrl" onChange={handleChange} /><br /><br />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default AddNewBook