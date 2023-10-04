import { useState } from "react";

export default function SearchBar({ onSearch }) {
  //para guardar el id que el usuario escribe en el input
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const handleSearch = (id) => {
    onSearch(id);
    setId("");
  };
  return (
    <div>
      <div className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          value={id}
          onChange={handleChange}
        />
        {/* la pasamos aqui para que el input tome ese valor */}
        <button
          className="btn btn-outline-warning"
          onClick={() => handleSearch(id)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
