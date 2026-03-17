import BookCard from './BookCard'

function BookList({ books, onDelete }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <p>No books here yet. Add one above to get started.</p>
      </div>
    )
  }

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default BookList
