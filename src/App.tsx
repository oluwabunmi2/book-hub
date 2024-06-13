import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import FilterOptions from './components/FilterOptions';
import SortSelector from './components/SortSelector';
import NavBar from './components/NavBar';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useBooks';


export interface BookQuery {
  genre?: Genre; // Assuming Genre is imported or defined in this file
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleSearch = (searchText: string) => {
    setSearchQuery(searchText);
  };

  return (
    <div className="app">
      <NavBar onSearch={handleSearch} />
      <FilterOptions setFilter={setFilter} />
      <SortSelector setSortOrder={setSortOrder} />
      <BookList searchQuery={searchQuery} filter={filter} sortOrder={sortOrder} />
    </div>
  );
};

export default App;
