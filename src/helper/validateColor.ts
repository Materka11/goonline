export const validateColor = (color: string): boolean => {
  const validHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

  return validHex.test(color);
};
