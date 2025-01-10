import { configureStore } from "@reduxjs/toolkit";
import stagiaireReducer from "./StagiaireSlice";
export default configureStore({
  reducer: {
    stg: stagiaireReducer,
  },
});
