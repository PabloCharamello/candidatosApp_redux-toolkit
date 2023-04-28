import { configureStore } from "@reduxjs/toolkit";
import { departmentsSlice, profilesSlice } from "./profilesSlice";

export default configureStore({
  reducer: {
    myEmployees: profilesSlice.reducer,
    misDepartamentos: departmentsSlice.reducer,
  },
});
