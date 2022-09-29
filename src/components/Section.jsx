import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/section.css";

const baseURL = "https://swapi.dev/api/starships/";

export const Section = () => {
  const [naves, setNaves] = useState();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNaves(response.data.results);
    });
  }, []);

  if (!naves) return null;

  const mapeaNaves = naves.map((item, i) => {
    return (
      <>
        <div className="muestra-naves">
          <div className="naves-name" key={i}>
            {item.name.toUpperCase()}
          </div>
          <div>{item.model}</div>
        </div>
      </>
    );
  });

  return <div>{mapeaNaves}</div>;
};
