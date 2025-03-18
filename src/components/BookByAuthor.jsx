import useFetch from "../useFetch"

const BookByAuthor = ({author}) => {

    const {data, loading, error} = useFetch(`https://backend-books-theta.vercel.app/books/author/${author}`)
    // console.log("BookByAuthorData:: ", data)

    return (
        <div>
            <h1>Books By Harper Lee</h1>
            {
                data ? data.map(book => (
                    
                    <li key={book._id}>
                        {book.title}
                    </li>
                ) ) : loading && "Loading..."
            }
        </div>
    )
}

export default BookByAuthor