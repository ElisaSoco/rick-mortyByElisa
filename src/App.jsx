import "./App.css";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import NotFound from "./components/NotFound";

// const example = {
//   id: 1,
//   name: "Rick Sanchez",
//   status: "Alive",
//   species: "Human",
//   gender: "Male",
//   origin: {
//     name: "Earth (C-137)",
//     url: "https://rickandmortyapi.com/api/location/1",
//   },
//   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// };

function App() {
  const [characters, setCharacters] = useState([]);
  // const onSearch = () => {
  //   setCharacters([...characters, example]);
  // };
  function findId(id) {
    return characters.some((character) => character.id === id);
  }
  function onSearch(id) {
    if (id > 0 && id < 827) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name && !findId(data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Este personaje ya existe");
          }
        })
        .catch((error) => window.alert(error.response.data));
    } else {
      window.alert("debe ingresar un id entre 1 y 826");
    }
  }

  function random() {
    const randomId = Math.floor(Math.random() * (826 - 1 + 1)) + 1;
    axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
      ({ data }) => {
        if (data.name && !findId(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Este personaje ya existe");
        }
      }
    );
  }

  function onClose(id) {
    const parsedId = parseInt(id);
    const filtered = characters.filter(
      (character) => character.id !== parsedId
    );
    setCharacters(filtered);
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} random={random} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
