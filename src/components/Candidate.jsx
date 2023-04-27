const Candidate = ({ candidate, handleFindOne, index }) => {
  return (
    <>
      <div className="user">
        <div className="picture">
          <img
            src={candidate.picture.large}
            alt={`canditate ${candidate.name.first}`}
          />
        </div>
        <div className="personal-information">
          <div className="name">
            {candidate.name.title}. {candidate.name.first} {candidate.name.last}
          </div>
          <div>
            Ubicación: {candidate.location.city} ({candidate.location.country})
          </div>
          <div>
            {" "}
            <a href="#">{candidate.email}</a>{" "}
          </div>
          <div>{candidate.phone}</div>
        </div>
        <div className="buttons">
          <button className="hide" onClick={() => handleFindOne(index)}>
            Ocultar
          </button>
          <button className="save">Guardar</button>
        </div>
      </div>
    </>
  );
};
export default Candidate;
