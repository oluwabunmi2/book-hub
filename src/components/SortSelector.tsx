
import React from 'react';
import { Select } from '@chakra-ui/react';

interface SortSelectorProps {
  setSortOrder: (order: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ setSortOrder }) => {
  return (
    <Select
      placeholder="Sort by"
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="alphabetical">Alphabetical</option>
      <option value="rating">Rating</option>
      <option value="date">Publication Date</option>
    </Select>
  );
};

export default SortSelector;
