import { useColor } from '../../hooks/useColor';
import { ColorCard } from './ColorCard/ColorCard';
import { sortColors } from '../../helper/sortColors';
import './colorsList.scss';

export const ColorsList = () => {
  const { colors } = useColor();

  const sortedColors = sortColors(colors);

  return (
    <ul className="colors-list">
      {sortedColors.map((color, index) => (
        <ColorCard key={`${color.value}${index}`} color={color} />
      ))}
    </ul>
  );
};
