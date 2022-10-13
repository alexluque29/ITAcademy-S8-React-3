import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pilotos.css";

export const Pilotos = (props) => {
  const [piloto, setPiloto] = useState([]);
  const imgError = () =>
    setPiloto(
      "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
    );

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setPiloto(res.data);
    });
  }, [props.url]);

  let clearURL = props.url.split("/");
  let id = clearURL[clearURL.length - 2];

  return (
    <div className="piloto-card">
      <img
        className="piloto-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={id}
        onError={imgError}
      />
      <div className="piloto-bg">
        <p className="piloto-name">{piloto.name}</p>
        <p className="piloto-text">
          A legendary Wookiee warrior and Han Solo’s longtime co-pilot,
          Chewbacca continues to serve as faithful first mate to carry out
          daring missions against the First Order behind the controls of the
          Millennium Falcon. Known as Chewie to his closest friends, he was part
          of a core group of rebels who restored freedom to the galaxy during
          the reign of the Galactic Empire.
        </p>
        <p className="data">@ DATA BANK</p>
      </div>
    </div>
  );
};
