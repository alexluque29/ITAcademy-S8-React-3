import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/films.css";

export const Films = (props) => {
  const [films, setFilms] = useState([]);

  const imgError = () =>
    setFilms("https://starwars-visualguide.com/assets/img/big-placeholder.jpg");

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setFilms(res.data);
    });
  }, [props.url]);

  let clearURL = props.url.split("/");
  let id = clearURL[clearURL.length - 2];

  return (
    <div className="film-card">
      <img
        className="film-image"
        src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
        alt={id}
        onError={imgError}
      />
      <div>
        <p className="film-name">{films.title}</p>
        <p className="data">@ DATA BANK</p>
      </div>
    </div>
  );
};
