import AddNewBook from "./components/AddNewBook";
import BookByAuthor from "./components/BookByAuthor";
import BookByTitle from "./components/BookByTitle";
import Books from "./components/Books";
const apiUrl = process.env.REACT_APP_API_URL;
const response = await fetch(`${apiUrl}/books`);

function App() {
  return (
    <div>
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Harper Lee" />
      <AddNewBook />
    </div>
  );
}

export default App;
