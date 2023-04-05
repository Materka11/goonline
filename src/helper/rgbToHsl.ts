export const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (diff !== 0) {
    s = l < 0.5 ? diff / (max + min) : diff / (2 - max - min);

    if (max === r) h = (g - b) / diff + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / diff + 2;
    else h = (r - g) / diff + 4;

    h /= 6;
  }

  return { h, s, l };
};
