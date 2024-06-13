
import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  genre: string;
  rating: number;
}

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.cover} alt={book.title} />
      <div className="book-details">
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <p>{book.rating} / 5</p>
      </div>
    </div>
  );
};

export default BookItem;
