import { RootState } from "./types";

// Selectors allow speration of data retrieval logic from rendering logic.
// This way, components don't depend on the form of the state.
// A selector is a function that accepts the state as an arg and returns a value from it.

export const currentStrokeSelector = (state: RootState) => state.currentStroke;
