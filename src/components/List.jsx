import { useEffect, useState } from "react";
import Candidate from "./Candidate";

const List = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => setCandidates(data.results));
  }, []);

  return (
    <>
      <div className="container">
        {candidates.map((candidate, index) => (
          <Candidate candidate={candidate} key={index} />
        ))}
      </div>
    </>
  );
};
export default List;
