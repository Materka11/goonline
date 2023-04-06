import { useState } from 'react';
import { hexToRgb } from '../../helper/hexToRgb';
import { rgbToHsl } from '../../helper/rgbToHsl';
import { DEFAULT_COLORS } from '../../constants/defaultColors';
import { useColor } from '../../hooks/useColor';
import { getUserColors } from '../../helper/getUserColors';
import './filterColors.scss';

export const FilterColors = () => {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const { setColors } = useColor();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userColors = getUserColors();
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

  const handleReset = () => {
    setRed(false);
    setGreen(false);
    setBlue(false);
    setSaturation(false);
    setColors([...DEFAULT_COLORS, ...getUserColors()]);
  };

  return (
    <form onSubmit={handleSubmit} className="form-filter">
      <div>
        <label htmlFor="red">Red &gt; 50%</label>
        <input
          type="checkbox"
          name="red"
          id="red-checkbox"
          checked={red}
          onChange={(event) => setRed(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="green">Green &gt; 50%</label>
        <input
          type="checkbox"
          name="green"
          id="green-checkbox"
          checked={green}
          onChange={(event) => setGreen(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="blue">Blue &gt; 50%</label>
        <input
          type="checkbox"
          name="blue"
          id="blue-checkbox"
          checked={blue}
          onChange={(event) => setBlue(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="saturation">Saturation &gt; 50%</label>
        <input
          type="checkbox"
          name="saturation"
          id="saturation-checkbox"
          checked={saturation}
          onChange={(event) => setSaturation(event.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};
