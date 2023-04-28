import React from "react";
import { useSelector } from "react-redux";

const Employee = ({ candidate, index, updateDepartment }) => {
  const departmentsList = useSelector(
    (state) => state.myDepartments.departments
  );

  return (
    <>
      <div className="column">
        <div className="user-picture">
          <img
            src={candidate.picture.large}
            alt={`employee ${candidate.name.first} ${candidate.name.first}`}
          />
        </div>
        <div className="user-name">
          <strong>
            {candidate.name.first} {candidate.name.last}
          </strong>
        </div>
        <div>{candidate.location.city}</div>
        <div>({candidate.location.country})</div>
        <div>
          <select onChange={(e) => updateDepartment(e.target.value, index)}>
            <option value="">Selecciona Región</option>
            {departmentsList.map((esteValor, i) => (
              <option key={i}>{esteValor}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default Employee;
