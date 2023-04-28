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
    modificarUnValor: (state, action) => {
      const { indice, nuevoContinente } = action.payload;
      state.employees[indice].departments = nuevoContinente;
    },
  },
});

export const departmentsSlice = createSlice({
  name: "myDepartments",
  initialState: {
    departments: [
      "África (Ventas)",
      "América (Organización)",
      "América (Comercial)",
      "Asia (Supervisión)",
      "Europa (Marketing)",
      "Oceanía (Distribución)",
    ],
  },
  reducer: {},
});

export const { addCandidate, modificarUnValor } = profilesSlice.actions;
