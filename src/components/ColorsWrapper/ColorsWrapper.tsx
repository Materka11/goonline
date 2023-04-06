import { AddColors } from '../AddColors/AddColors';
import { FilterColors } from '../FilterColors/FilterColors';
import { useEffect } from 'react';
import { DEFAULT_COLORS } from '../../constants/defaultColors';
import { useColor } from '../../hooks/useColor';
import { ColorsList } from '../ColorsList/ColorsList';
import { getUserColors } from '../../helper/getUserColors';
import { sortColors } from '../../helper/sortColors';

export const ColorsWrapper = () => {
  const { setColors } = useColor();

  useEffect(() => {
    const userColors = getUserColors();
    const allColors = [...DEFAULT_COLORS, ...userColors];
    const sortedColors = sortColors(allColors);
    setColors(sortedColors);
  }, []);

  return (
    <div>
      <AddColors />
      <FilterColors />
      <ColorsList />
    </div>
  );
};
