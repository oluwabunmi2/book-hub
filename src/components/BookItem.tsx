import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
};

export default BookItem;
