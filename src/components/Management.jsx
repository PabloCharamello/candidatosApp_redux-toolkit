import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Employee from "./Employee";
import { modificarUnValor } from "../store/profilesSlice";

const Management = (index, candidate) => {
  const dispatch = useDispatch();

  const update = (continente, index) => {
    dispatch(modificarUnValor({ indice: index, nuevoContinente: continente }));
  };
  const employeesList = useSelector((state) => state.myEmployees.employees);
  return (
    <>
      <h1>Perfiles guardados:</h1>
      <Link to="/candidates">
        <button>Candidatos</button>
      </Link>
      <div className="employee-container">
        {employeesList.map((candidate) => (
          <Employee
            key={candidate.email}
            candidate={candidate}
            index={index}
            update={update}
          />
        ))}
      </div>
    </>
  );
};
export default Management;
