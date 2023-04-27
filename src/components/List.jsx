import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";

const List = () => {
  const [candidates, setCandidates] = useState([]);

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

  return (
    <div className="container">
      {candidates.map((candidate, index) => (
        <Candidate
          key={index}
          candidate={candidate}
          handleFindOne={handleFindOne}
          index={index}
        />
      ))}
    </div>
  );
};
export default List;
