// src/components/BookList.tsx
import React, { useContext } from 'react';
import BookItem from './BookItem';
import { BookContext } from '../context/BookContext';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number; 
  date: string; // Add date property for publication date
}

interface BookListProps {
  searchQuery: string;
  filter: string;
  sortOrder: string;
}

const BookList: React.FC<BookListProps> = ({ searchQuery, filter, sortOrder }) => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("BookList must be used within a BookProvider");
  }

  const books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', cover: 'book1.jpg', genre: 'Fiction', rating: 4.5, date: '2021-01-01' },
    { id: 2, title: 'Book 2', author: 'Author 2', cover: 'book2.jpg', genre: 'Non-fiction', rating: 3.8, date: '2020-05-15' },
    { id: 3, title: 'Book 3', author: 'Author 3', cover: 'book3.jpg', genre: 'Fantasy', rating: 4.2, date: '2019-09-23' },
    // Add more books as needed
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!filter || book.genre === filter)
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === 'alphabetical') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'rating') {
      return b.rating - a.rating;
    } else if (sortOrder === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return 0;
    }
  });

  return (
    <div className="book-list">
      {sortedBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
