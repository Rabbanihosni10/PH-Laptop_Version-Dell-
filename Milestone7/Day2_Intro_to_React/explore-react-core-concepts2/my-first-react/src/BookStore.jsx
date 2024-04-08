import Book from "./Books"
export default function BookStore({book}){
    return (
        <div>
            <h3>Books: </h3>
            <p>Books no: {book.length}</p>
            {
                book.map(book=> <Book book={book}></Book>)
            }
        </div>
    )
}