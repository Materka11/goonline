import { useColor } from '../../hooks/useColor';
import { ColorCard } from './ColorCard/ColorCard';
import { sortColors } from '../../helper/sortColors';

export const ColorsList = () => {
  const { colors } = useColor();

  const sortedColors = sortColors(colors);

  return (
    <div>
      <ul>
        {sortedColors.map((color, index) => (
          <ColorCard key={`${color.value}${index}`} color={color} />
        ))}
      </ul>
    </div>
  );
};
