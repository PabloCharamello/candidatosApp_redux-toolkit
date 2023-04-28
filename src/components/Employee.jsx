const Employee = ({ candidate, index }) => {
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
      </div>
    </>
  );
};
export default Employee;
