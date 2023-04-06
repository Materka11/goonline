import { ColorType } from '../types';
import { hexToRgb } from './hexToRgb';

export const sortColors = (colors: ColorType[]) =>
  colors.sort((colorA, colorB) => {
    const rgbA = hexToRgb(colorA.value);
    const rgbB = hexToRgb(colorB.value);

    if (rgbA.r !== rgbB.r) return rgbB.r - rgbA.r;
    if (rgbA.g !== rgbB.g) return rgbB.g - rgbA.g;
    if (rgbA.b !== rgbB.b) return rgbB.b - rgbA.b;

    return 0;
  });
