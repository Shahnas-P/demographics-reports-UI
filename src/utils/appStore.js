import { configureStore } from "@reduxjs/toolkit";
import dashBoardReducer from "./slice";
const appStore = configureStore({
  reducer: {
    dashboard: dashBoardReducer,
  },
});
export default appStore;
