import { getUserColors } from '../../../helper/getUserColors';
import { useColor } from '../../../hooks/useColor';
import { ColorType } from '../../../types';
import './colorCard.scss';

interface ColorCardProp {
  color: ColorType;
}

export const ColorCard = ({ color }: ColorCardProp) => {
  const { value, isDefault } = color;

  const { removeColor } = useColor();

  const handleRemoveColor = (value: string) => {
    const colors = getUserColors();
    const index = colors.findIndex((c) => c.value === value);
    if (index !== -1) {
      colors.splice(index, 1);
      localStorage.setItem('colors', JSON.stringify(colors));
    }
    removeColor({ value: value, isDefault: isDefault });
  };

  return (
    <li className="colors-element">
      <div className="color-rectangle" style={{ backgroundColor: value }} />
      <span>{value}</span>
      {isDefault ? (
        <div className="button-element" />
      ) : (
        <button
          className="button-element"
          onClick={() => handleRemoveColor(value)}
        >
          X
        </button>
      )}
    </li>
  );
};
