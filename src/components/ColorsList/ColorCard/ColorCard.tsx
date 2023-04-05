import { ColorType } from '../../../types';

interface ColorCardProp {
  color: ColorType;
}

export const ColorCard = ({ color }: ColorCardProp) => {
  const { value, isDefault } = color;

  const removeColor = (value: string) => {
    const savedColors = localStorage.getItem('colors');
    let colors: ColorType[] = [];
    if (savedColors) {
      colors = JSON.parse(savedColors);
    }

    const index = colors.findIndex((c) => c.value === value);

    if (index !== -1) {
      colors.splice(index, 1);
      localStorage.setItem('colors', JSON.stringify(colors));
    }
  };

  return (
    <li>
      <span>{value}</span>
      {isDefault ? null : <button onClick={() => removeColor(value)}>X</button>}
    </li>
  );
};
