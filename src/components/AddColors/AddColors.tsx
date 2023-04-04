import { useState } from 'react';
import { validateColor } from '../../helper/validateColor';

export const AddColors = () => {
  const [color, setColor] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateColor(color)) {
      alert('Invalid color format! Use HEX RGB format.');
      return;
    }
    const savedColors = localStorage.getItem('colors');
    let colors: { [key: string]: string } = {};
    if (savedColors) {
      colors = JSON.parse(savedColors);
    }
    colors[color.toUpperCase()] = color.toUpperCase();
    localStorage.setItem('colors', JSON.stringify(colors));
    setColor('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputColor = event.target.value;
    if (!/^(#[a-zA-Z0-9]{0,6})$/.test(inputColor)) {
      return;
    }
    setColor(inputColor.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color-input">Color:</label>
      <input
        id="color-input"
        type="text"
        value={color}
        onChange={handleChange}
        maxLength={7}
        pattern="^(#[a-zA-Z0-9]{0,6})$"
        title="Use HEX RGB format. Only letters and digits are allowed."
      />
      <button type="submit">Add color</button>
    </form>
  );
};
