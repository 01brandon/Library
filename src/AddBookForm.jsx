import { useState } from 'react'

const GENRES = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Self-Help', 'History', 'Other']

const emptyForm = {
  title: '',
  author: '',
  genre: 'Fiction',
  year: '',
  rating: 3,
  read: false,
}

function AddBookForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.author.trim()) {
      setError('Title and author are required.')
      return
    }
    setError('')
    onAdd({
      ...form,
      year: form.year ? parseInt(form.year) : new Date().getFullYear(),
      rating: parseInt(form.rating),
    })
    setForm(emptyForm)
    setOpen(false)
  }

  if (!open) {
    return (
      <div className="add-form-wrapper">
        <button className="open-form-btn" onClick={() => setOpen(true)}>
          + Add a Book
        </button>
      </div>
    )
  }

  return (
    <div className="add-form-wrapper">
      <form className="add-form" onSubmit={handleSubmit}>
        <h3 className="form-heading">New Book</h3>

        {error && <p className="form-error">{error}</p>}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              placeholder="Book title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              value={form.author}
              onChange={handleChange}
              placeholder="Author name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select id="genre" name="genre" value={form.genre} onChange={handleChange}>
              {GENRES.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              id="year"
              name="year"
              type="number"
              value={form.year}
              onChange={handleChange}
              placeholder="e.g. 2021"
              min="1000"
              max={new Date().getFullYear()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating (1-5)</label>
            <input
              id="rating"
              name="rating"
              type="number"
              value={form.rating}
              onChange={handleChange}
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="form-check">
          <input
            id="read"
            name="read"
            type="checkbox"
            checked={form.read}
            onChange={handleChange}
          />
          <label htmlFor="read">I have already read this</label>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Add Book</button>
          <button type="button" className="cancel-btn" onClick={() => { setOpen(false); setError('') }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm
