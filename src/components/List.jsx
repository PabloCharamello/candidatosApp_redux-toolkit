import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import { useDispatch, useSelector } from "react-redux";
import { addCandidate } from "../store/profilesSlice";
import { Link } from "react-router-dom";

const List = () => {
  const [candidates, setCandidates] = useState([]);
  const employeesList = useSelector((state) => state.myEmployees.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((res) => res.json())
      .then((data) => setCandidates(data.results));
  }, []);

  const handleFindOne = (index) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => {
        const candidatesCopy = [...candidates];
        candidatesCopy[index] = { ...data.results[0] };
        setCandidates(candidatesCopy);
      });
  };

  const handleSaveOne = (candidate, index) => {
    const nuevoValor = { ...candidate, department: "" };
    dispatch(addCandidate(nuevoValor));
    handleFindOne(index);
  };

  return (
    <>
      <div className="container">
        {candidates.map((candidate, index) => (
          <Candidate
            key={index}
            candidate={candidate}
            handleFindOne={handleFindOne}
            index={index}
            handleSaveOne={handleSaveOne}
          />
        ))}
      </div>
      <hr />
      <div className="candidates">
        {employeesList.map((candidate, i) => (
          <Link to="/management" key={i}>
            <button>
              {candidate.name.first} {candidate.name.last}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};
export default List;
