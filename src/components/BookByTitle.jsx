import useFetch from "../useFetch"

const BookByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://backend-books-theta.vercel.app/books/${title}`)
    // console.log("Book By Title:: " , data)
    return (
        <div>
            {
                data ? data?.map(book => (
                    <div key={book._id}>
                        <h2>{book.title}</h2>
                        <p><strong>Author:</strong>{book.title}</p>
                        <p><strong>Release Year: </strong>{book.title}</p>
                        <p><strong>Genre:</strong> {book.genre.join(", ")}</p>
                    </div>
                )) : loading && "Loading..."
            }
        </div>
    )
}

export default BookByTitle