import { useState } from 'react'
import BookList from './BookList'
import AddBookForm from './AddBookForm'

const initialBooks = [
  { id: 1, title: 'The Midnight Library', author: 'Matt Haig', genre: 'Fiction', year: 2020, rating: 4, read: true },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', year: 2018, rating: 5, read: true },
  { id: 3, title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', year: 1965, rating: 5, read: false },
  { id: 4, title: 'Normal People', author: 'Sally Rooney', genre: 'Fiction', year: 2018, rating: 4, read: true },
  { id: 5, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', year: 1988, rating: 4, read: false },
  { id: 6, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', year: 2011, rating: 5, read: true },
]

const FILTERS = ['All', 'Read', 'To Read']

function App() {
  const [books, setBooks] = useState(initialBooks)
  const [filter, setFilter] = useState('All')

  function handleAdd(newBook) {
    setBooks(prev => [{ ...newBook, id: Date.now() }, ...prev])
  }

  function handleDelete(id) {
    setBooks(prev => prev.filter(book => book.id !== id))
  }

  const filtered = books.filter(book => {
    if (filter === 'Read') return book.read === true
    if (filter === 'To Read') return book.read === false
    return true
  })

  const readCount = books.filter(b => b.read).length

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library</h1>
        <p>Keep track of what you are reading and what is next.</p>
      </header>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-number">{books.length}</span>
          <span className="stat-label">Total Books</span>
        </div>
        <div className="stat">
          <span className="stat-number">{readCount}</span>
          <span className="stat-label">Read</span>
        </div>
        <div className="stat">
          <span className="stat-number">{books.length - readCount}</span>
          <span className="stat-label">To Read</span>
        </div>
      </div>

      <AddBookForm onAdd={handleAdd} />

      <div className="filter-bar">
        <span className="filter-label">Show</span>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <BookList books={filtered} onDelete={handleDelete} />
    </div>
  )
}

export default App
