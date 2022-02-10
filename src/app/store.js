import {combineReducers, configureStore} from '@reduxjs/toolkit';
import useReducer from "./redusers/walletsSlice";

const rootReduser = combineReducers({
  useReducer
})

export const  setupeStore = () => {
  return configureStore({
    reducer: rootReduser,
  })
}