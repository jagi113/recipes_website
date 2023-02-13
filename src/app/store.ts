import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import recipesReducer from '../reducers/recipesReducer'; // Find out how to join it with reducers/index.ts
import recipeDetailReducer from '../reducers/recipeDetailReducer';
import thunk from "redux-thunk";


export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipeDetail: recipeDetailReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunk
      }
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
