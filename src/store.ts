import { rootReducer } from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";

// Create and export a new store instance.
// devToolsEnhancer is Redux DevTools middleware (gets triggered on each action dispatch).
// It has access to the current action and the store, and can dispatch new actions.

export const store = createStore(rootReducer, devToolsEnhancer({}));
