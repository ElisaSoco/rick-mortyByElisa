import { Link } from "react-router-dom";

export default function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
}) {
  const divStyle = { width: "18rem" };
  return (
    <div className="d-inline-flex p-2">
      <div className="card " style={divStyle}>
        <img src={image} alt="imagen" className="card-img-top img-fluid" />
        <div className="card-body">
          <Link to={`/detail/${id}`}>
            <h5 className="stretched-link card-title ">{name}</h5>
          </Link>
          <p className="card-text"> Status: {status}</p>
          <p className="card-text">Species: {species}</p>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Origin: {origin}</p>
          <button className="btn btn-warning" onClick={() => onClose(id)}>
            Close Character
          </button>
        </div>
      </div>
    </div>
  );
}
