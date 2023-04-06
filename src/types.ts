export interface ColorType {
  value: string;
  isDefault: boolean;
}

export interface ColorsState {
  colors: ColorType[];
}

interface SetColorsAction {
  type: 'SET_COLORS';
  payload: {
    colors: ColorType[];
  };
}

interface AddColorAction {
  type: 'ADD_TO_COLORS';
  payload: {
    color: ColorType;
  };
}

interface RemoveColorAction {
  type: 'REMOVE_FROM_COLORS';
  payload: {
    color: ColorType;
  };
}

export type ColorAction = SetColorsAction | AddColorAction | RemoveColorAction;
