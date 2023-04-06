import { ColorType, ColorsState, ColorAction } from '../types';

export const initialState: ColorsState = {
  colors: [],
};

const colorReducer = (state: ColorsState, action: ColorAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_COLORS':
      return {
        colors: payload.colors,
      };
    case 'ADD_TO_COLORS':
      return {
        ...state,
        colors: [...state.colors, payload.color],
      };
    case 'REMOVE_FROM_COLORS':
      return {
        ...state,
        colors: state.colors.filter(
          (color: ColorType) => color.value !== payload.color.value
        ),
      };
    default:
      throw new Error(`No case for type ${type}`);
  }
};

export default colorReducer;
