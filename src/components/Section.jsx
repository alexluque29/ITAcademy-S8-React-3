import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/section.css";
import axios from "axios";

export const Section = () => {
  const [naves, setNaves] = useState();
  const [pageId, setPageId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${pageId}`)
      .then((response) => {
        setNaves(response.data.results);
      });
  }, [pageId]);
  if (!naves) return null;

  function nextTen() {
    setPageId((prevPageId) => prevPageId + 1);
  }

  const mapeaNaves = naves.map((item, i) => {
    let url = item.url.split("/");
    let id = url[5];

    return (
      <div key={i} className="muestra-naves">
        <Link to={`/naves/${id}`}>
          <div className="naves-name">{item.name.toUpperCase()}</div>
          <div className="naves-model">{item.model}</div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div>{mapeaNaves}</div>;
      <div class="button">
        <button class="button" className="button-next" onClick={nextTen}>
          SHOW MORE
        </button>
      </div>
    </>
  );
};
