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
  function prevTen() {
    pageId >= 1 ? setPageId((prevPageId) => prevPageId - 1) : setPageId(pageId);
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
      <div className="button">
        <button aria-hidden="true" className="button-next" onClick={prevTen}>
          SHOW LESS
        </button>
        <button aria-hidden="true" className="button-next" onClick={nextTen}>
          SHOW MORE
        </button>
      </div>
    </>
  );
};
