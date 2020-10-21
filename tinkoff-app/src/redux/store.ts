import { createStore } from "redux";
import { cardReducer } from "./reducer";

/**
 * Внутрь функции createStore нужно передать reducer
 */

// @ts-ignore
export const store = createStore(cardReducer);