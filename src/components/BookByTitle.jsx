import useFetch from "../useFetch"

const BookByTitle = ({title}) => {
    const {data, loading, error} = useFetch(`https://backend-books-theta.vercel.app/books/${title}`)
    
    return (
        <div>
            {
                data?.length > 0 ? data.map(book => (
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