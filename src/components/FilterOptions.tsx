
import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

interface FilterOptionsProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const genres = ['Fiction', 'Non-fiction', 'Science Fiction', 'Fantasy', 'Mystery'];

const FilterOptions: React.FC<FilterOptionsProps> = ({ setFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const handleFilterChange = () => {
    setFilter(selectedGenre);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <TextField
        select
        label="Genre"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        variant="outlined"
        style={{ width: '200px' }}
      >
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            {genre}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" color="primary" onClick={handleFilterChange}>
        Apply Filter
      </Button>
    </Box>
  );
};

export default FilterOptions;
