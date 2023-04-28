import { configureStore } from "@reduxjs/toolkit";
import { profilesSlice } from "./profilesSlice";
import { departmentsSlice } from "./profilesSlice";

export default configureStore({
  reducer: {
    myEmployees: profilesSlice.reducer,
    myDepartments: departmentsSlice.reducer,
  },
});
