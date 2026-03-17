# Book Library

A React application for tracking books you have read and books you want to read. Built with Vite and React, with no external UI libraries.

---
## Features

- View a list of books with title, author, genre, year, and star rating
- Add new books dynamically using a form
- Delete books from the list
- Filter books by **All**, **Read**, or **To Read**
- Stats bar showing total, read, and unread counts
- Responsive layout for mobile and desktop

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI and state management |
| Vite | Build tool and dev server |
| CSS | Styling (no UI libraries) |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node)


## Project Structure

```
book-library/
├── public/
├── src/
│   ├── App.jsx           # Root component, holds all state
│   ├── BookList.jsx      # Renders the list of books using .map()
│   ├── BookCard.jsx      # Individual book card component
│   ├── AddBookForm.jsx   # Controlled form for adding a new book
│   ├── index.css         # Global styles and CSS variables
│   └── main.jsx          # Entry point, mounts React to the DOM
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## How It Works

Data is stored as an array of objects inside `App.jsx`. The `BookList` component receives the array as a prop and renders one `BookCard` per item using `.map()`. State for adding and deleting books lives in `App` and is passed down to child components as functions via props.

---

## Deployment

This project can be deployed on Vercel by connecting your GitHub repository.

**Netlify settings:**

- Build command: `npm run build`
- Publish directory: `dist`

