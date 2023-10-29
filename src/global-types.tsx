export type MinMax = {
  min: number;
  max: number;
};

// Styled Components
export type Size = {
  $width?: string;
  $height?: string;
};

// Utils 😅
export const emailLengths: MinMax = { min: 10, max: 60 };
export const passwordLengths: MinMax = { min: 8, max: 14 };
export const codeLengths: MinMax = { min: 5, max: 6 };
