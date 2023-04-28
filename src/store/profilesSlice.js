import { createSlice } from "@reduxjs/toolkit";

export const profilesSlice = createSlice({
  name: "myEmployees",
  initialState: {
    employees: [],
  },
  reducers: {
    addCandidate: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
  },
});

export const departmentsSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    employees: [],
  },
  reducer: {},
});

export const { addCandidate } = profilesSlice.actions;
