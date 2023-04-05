import { useState, useEffect } from 'react';
import { DEFAULT_COLORS } from '../../constants/defaultColors';
import { ColorType } from '../../types';
import { ColorCard } from './ColorCard/ColorCard';
import { hexToRgb } from '../../helper/hexToRgb';

export const ColorsList = () => {
  const [colors, setColors] = useState<ColorType[]>([]);

  useEffect(() => {
    const savedColors = localStorage.getItem('colors');
    let userColors = [];
    if (savedColors) userColors = JSON.parse(savedColors);
    const allColors = [...DEFAULT_COLORS, ...userColors];

    const sortedColors = allColors.sort((colorA, colorB) => {
      const rgbA = hexToRgb(colorA.value);
      const rgbB = hexToRgb(colorB.value);

      if (rgbA.r !== rgbB.r) return rgbB.r - rgbA.r;
      if (rgbA.g !== rgbB.g) return rgbB.g - rgbA.g;
      if (rgbA.b !== rgbB.b) return rgbB.b - rgbA.b;

      return 0;
    });
    setColors(sortedColors);
  }, [colors]);

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
