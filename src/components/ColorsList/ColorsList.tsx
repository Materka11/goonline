import { useState, useEffect } from 'react';
import { DEFAULT_COLORS } from '../../constants/defaultColors';

export const ColorsList = () => {
  const [colors, setColors] = useState<{ value: string }[]>([]);

  useEffect(() => {
    const savedColors = localStorage.getItem('colors');
    let userColors = [];
    if (savedColors) {
      userColors = JSON.parse(savedColors);
    }
    const allColors = [...DEFAULT_COLORS, ...userColors];
    console.log(allColors);
    setColors(allColors);
  }, []);
  console.log(colors);
  return (
    <div>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color.value}</li>
        ))}
      </ul>
    </div>
  );
};
