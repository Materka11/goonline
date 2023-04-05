import { ColorType } from '../../types';
import { ColorCard } from './ColorCard/ColorCard';

interface ColorsListProp {
  colors: ColorType[];
}

export const ColorsList = ({ colors }: ColorsListProp) => {
  return (
    <div>
      <ul>
        {colors.map((color, index) => (
          <ColorCard key={`${color.value}${index}`} color={color} />
        ))}
      </ul>
    </div>
  );
};
