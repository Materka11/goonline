import { useState, useEffect } from 'react';
import { hexToRgb } from '../../helper/hexToRgb';
import { rgbToHsl } from '../../helper/rgbToHsl';
import { DEFAULT_COLORS } from '../../constants/defaultColors';
import { ColorType } from '../../types';
import { ColorsList } from '../ColorsList/ColorsList';

export const FilterColors = () => {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [colors, setColors] = useState<ColorType[]>([]);

  useEffect(() => {
    //
    const savedColors = localStorage.getItem('colors');
    let userColors = [];
    if (savedColors) userColors = JSON.parse(savedColors);
    //zrobic funkcje do tego
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
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const savedColors = localStorage.getItem('colors');
    let userColors = [];
    if (savedColors) userColors = JSON.parse(savedColors);
    let filteredColors = [...DEFAULT_COLORS, ...userColors];

    if (red) {
      filteredColors = filteredColors.filter((color) => {
        const rgb = hexToRgb(color.value);
        return rgb.r > 127;
      });
    }
    if (green) {
      filteredColors = filteredColors.filter((color) => {
        const rgb = hexToRgb(color.value);
        return rgb.g > 127;
      });
    }
    if (blue) {
      filteredColors = filteredColors.filter((color) => {
        const rgb = hexToRgb(color.value);
        return rgb.b > 127;
      });
    }
    if (saturation) {
      filteredColors = filteredColors.filter((color) => {
        const rgb = hexToRgb(color.value);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        return hsl.s > 0.5;
      });
    }
    setColors(filteredColors);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="red">Red &gt; 50%:</label>
        <input
          type="checkbox"
          name="red"
          id="red-checkbox"
          checked={red}
          onChange={(event) => setRed(event.target.checked)}
        />

        <label htmlFor="green">Green &gt; 50%:</label>
        <input
          type="checkbox"
          name="green"
          id="green-checkbox"
          checked={green}
          onChange={(event) => setGreen(event.target.checked)}
        />

        <label htmlFor="blue">Blue &gt; 50%:</label>
        <input
          type="checkbox"
          name="blue"
          id="blue-checkbox"
          checked={blue}
          onChange={(event) => setBlue(event.target.checked)}
        />

        <label htmlFor="saturation">Saturation &gt; 50%:</label>
        <input
          type="checkbox"
          name="saturation"
          id="saturation-checkbox"
          checked={saturation}
          onChange={(event) => setSaturation(event.target.checked)}
        />
        <button type="submit">Submit</button>
      </form>
      <ColorsList colors={colors} />
    </>
  );
};
