import { useEffect, useState } from "react";

const List = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6").then((response) =>
      response.json().then((data) => setCandidates(data.results))
    );
  }, []);

  return (
    <>
      {candidates.map((candidate, index) => (
        <div key={index}>{candidate.name.first}</div>
      ))}
    </>
  );
};

export default List;
