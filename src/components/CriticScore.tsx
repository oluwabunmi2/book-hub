// src/components/CriticScore.tsx
import React from 'react';
import { Box } from '@mui/material';

interface CriticScoreProps {
  score: number;
}

const CriticScore: React.FC<CriticScoreProps> = ({ score }) => {
  const getColor = (score: number) => {
    if (score >= 75) {
      return 'green';
    } else if (score >= 50) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <Box
      component="span"
      sx={{
        backgroundColor: getColor(score),
        color: 'white',
        padding: '0.25em 0.5em',
        borderRadius: '0.25em',
        fontWeight: 'bold',
      }}
    >
      {score}
    </Box>
  );
};

export default CriticScore;
