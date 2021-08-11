import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cityReducer } from "./cityReducer";

export const rootReducer = combineReducers({ authReducer, cityReducer })