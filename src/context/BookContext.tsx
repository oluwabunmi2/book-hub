
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface Filter {
  genre: string;
}

interface BookContextProps {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const BookContext = createContext<BookContextProps | undefined>(undefined);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [filter, setFilter] = useState<Filter>({ genre: '' });
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <BookContext.Provider value={{ filter, setFilter, searchQuery, setSearchQuery }}>
      {children}
    </BookContext.Provider>
  );
};
