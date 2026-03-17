function BookCard({ book, onDelete }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < book.rating ? 'star filled' : 'star'}>
      &#9733;
    </span>
  ))

  return (
    <div className={`book-card ${book.read ? 'read' : 'unread'}`}>
      <div className="book-card-top">
        <span className="genre-tag">{book.genre}</span>
        <span className="read-badge">{book.read ? 'Read' : 'To Read'}</span>
      </div>

      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-year">{book.year}</p>

      <div className="book-footer">
        <div className="stars">{stars}</div>
        <button
          className="delete-btn"
          onClick={() => onDelete(book.id)}
          aria-label={`Remove ${book.title}`}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default BookCard
