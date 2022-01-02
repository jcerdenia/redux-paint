import { rootReducer } from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

// Create and export a new store instance.
// devToolsEnhancer is Redux DevTools middleware (gets triggered on each action dispatch).
// It has access to the current action and the store, and can dispatch new actions.

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
