import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import FilterOptions from './components/FilterOptions';
import SortSelector from './components/SortSelector';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useBooks';
import { BookProvider } from './context/BookContext';


export interface BookQuery {
  genre?: Genre; // Assuming Genre is imported or defined in this file
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}

const App: React.FC = () => {
  const [, setSearchQuery] = useState('');
  const [, setFilter] = useState('');
  const [, setSortOrder] = useState('');

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
  };

  return (
    <div className="app">
      <NavBar onSearch={handleSearch} />
      <FilterOptions setFilter={setFilter} />
      <SortSelector setSortOrder={setSortOrder} />
      <BookProvider children={undefined}>
        
      </BookProvider>
    
    </div>
  );
};

export default App;
