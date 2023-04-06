import { useState } from 'react';
import { validateColor } from '../../helper/validateColor';
import { useColor } from '../../hooks/useColor';
import { getUserColors } from '../../helper/getUserColors';
import './AddColors.scss';

export const AddColors = () => {
  const [color, setColor] = useState('');
  const { colors, addColor } = useColor();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateColor(color)) {
      alert('Invalid color format! Use HEX RGB format.');
      return;
    }
    if (colors.some((c) => c.value === color.toUpperCase())) {
      alert('Color already exists!');
      return;
    }
    const userColors = getUserColors();
    let colorValue = { value: color.toUpperCase(), isDefault: false };
    userColors.push(colorValue);
    localStorage.setItem('colors', JSON.stringify(userColors));
    addColor(colorValue);
    setColor('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputColor = event.target.value;
    if (!/^(#[a-zA-Z0-9]{0,6})$/.test(inputColor)) return;
    setColor(inputColor.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit} className="form-add">
      <label htmlFor="color-input">Color: </label>
      <input
        id="color-input"
        type="text"
        value={color}
        onChange={handleChange}
        maxLength={7}
        pattern="^(#[a-zA-Z0-9]{0,6})$"
        title="Use HEX RGB format. Only letters and digits are allowed."
        placeholder="#FFFFFF"
      />
      <button type="submit">Add color</button>
    </form>
  );
};
