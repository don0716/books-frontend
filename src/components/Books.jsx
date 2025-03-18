import { useState } from "react"
import useFetch from "../useFetch"

const Books = () => {
    const [successMessage, setSuccessMessage] = useState("")
    // const {data, loading, error} = useFetch(`http://localhost:3000/books`)
    const {data, loading, error} = useFetch(`https://backend-books-theta.vercel.app/books`)

    console.log(data)

    const handleDelete = async (movieId) => {
        try{
            const res = await fetch(`https://backend-books-theta.vercel.app/books/${movieId}`, {
                method: "DELETE"
            })
            if(!res.ok){
                console.log(res)
                setSuccessMessage("Failed to Delete Book")
                throw "Failed to Delete Book"
            }
            const data = await res.json()

            if(data){
                setSuccessMessage("Book Deleted Successfully")
                window.location.reload()
            }

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Books</h2>

            <div>
               <ul>
               {
                    data ? data?.map(book => (
                        <li key={book._id}>
                            {book.title} <button onClick={() => handleDelete(book._id)}>Delete</button>
                        </li>
                    )) : loading && "Loading..."
                }
               </ul>
            </div>
            <p>{successMessage}</p>

        </div>
    )
}

export default Books