import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

export const useColor = () => {
  const context = useContext(ColorContext);

  if (context === undefined)
    throw new Error('useColor must be used within ColorContext');

  return context;
};
