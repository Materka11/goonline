import { ColorType } from '../types';

export const getUserColors = () => {
  const savedColors = localStorage.getItem('colors');
  let userColors: ColorType[] = [];
  if (savedColors) userColors = JSON.parse(savedColors);

  return userColors;
};
