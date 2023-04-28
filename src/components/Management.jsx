import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Employee from "./Employee";
const Management = (index, candidate) => {
  const employeesList = useSelector((state) => state.myEmployees.employees);
  return (
    <>
      <h1>Perfiles guardados:</h1>
      <Link to="/candidates">
        <button>Candidatos</button>
      </Link>
      <div>
        {employeesList.map((candidate) => (
          <Employee key={candidate.email} candidate={candidate} index={index} />
        ))}
      </div>
    </>
  );
};
export default Management;
