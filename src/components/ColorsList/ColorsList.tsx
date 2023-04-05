import { useState, useEffect } from 'react';
import { DEFAULT_COLORS } from '../../constants/defaultColors';
import { ColorType } from '../../types';
import { ColorCard } from './ColorCard/ColorCard';

export const ColorsList = () => {
  const [colors, setColors] = useState<ColorType[]>([]);

  useEffect(() => {
    const savedColors = localStorage.getItem('colors');
    let userColors = [];
    if (savedColors) {
      userColors = JSON.parse(savedColors);
    }
    const allColors = [...DEFAULT_COLORS, ...userColors];
    console.log(allColors);
    setColors(allColors);
  }, [colors]);
  console.log(colors);

  return (
    <div>
      <ul>
        {colors.map((color) => (
          <ColorCard key={color.value} color={color} />
        ))}
      </ul>
    </div>
  );
};
