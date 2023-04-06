import { createContext, useReducer, ReactNode } from 'react';
import colorReducer, { initialState } from '../reducer/colorReducer';
import { ColorType, ColorsState, ColorAction } from '../types';

interface ColorContextType extends ColorsState {
  setColors: (colors: ColorType[]) => void;
  addColor: (color: ColorType) => void;
  removeColor: (color: ColorType) => void;
}

export const ColorContext = createContext<ColorContextType>({
  colors: [],
  setColors: () => {},
  addColor: () => {},
  removeColor: () => {},
});

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<ColorsState, ColorAction>>(
    colorReducer,
    initialState
  );

  const setColors = (colors: ColorType[]) => {
    dispatch({ type: 'SET_COLORS', payload: { colors } });
  };

  const addColor = (color: ColorType) => {
    dispatch({ type: 'ADD_TO_COLORS', payload: { color } });
  };

  const removeColor = (color: ColorType) => {
    dispatch({ type: 'REMOVE_FROM_COLORS', payload: { color } });
  };

  const value = {
    colors: state.colors,
    setColors,
    addColor,
    removeColor,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
