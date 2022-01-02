import { RootState } from "./types";
import { Action } from "./actions";
import { BEGIN_STROKE, UPDATE_STROKE, END_STROKE } from "./actions";

const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
  historyIndex: 0,
};

export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  switch (action.type) {
    default: {
      return state;
    }
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [action.payload],
        },
      };
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload],
        },
      };
    }
    case END_STROKE: {
      // Prevent unnecessary calulations:
      if (!state.currentStroke.points.length) {
        return state;
      }

      return {
        ...state,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [...state.strokes, state.currentStroke],
      };
    }
  }
};
