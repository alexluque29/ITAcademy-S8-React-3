import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text } from "../components/Text";
import axios from "axios";
import "../styles/swColor.css";
import "../styles/naves.css";

export default function NaveInfo() {
  const params = useParams();

  const [imgNave, setImgNave] = useState(`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`);
  const imgError = () => setImgNave("https://starwars-visualguide.com/assets/img/big-placeholder.jpg");

  const [naveSelec, setNaveSelec] = useState(null);

  function nave(id) {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => setNaveSelec(res.data));
  }

  useEffect(() => {
    nave(params.id);
  }, [params.id]);

  return (
    <>
      {naveSelec !== null ? (
        <div className="info-main">
          <img
            src={imgNave}
            className="imagenNave"
            alt={params.id}
            onError={imgError}
          />
          <div className="nombreNave">{naveSelec.name}</div>
          <div className="nave-text">
            <Text />
          </div>
          <div className="fichasNaves">
            <div className="fichasIzq">
              <div> Model: {naveSelec.model}</div>
              <div> Cost in credits: {naveSelec.cost_in_credits}</div>
              <div> Cargo capacity: {naveSelec.cargo_capacity}</div>
              <div className="detalleNave">
                {" "}
                {`Atmospheric speed: ${naveSelec.max_atmosphering_speed} km/h.`}
              </div>
            </div>
            <div className="fichasDer">
              <div> Manufacturer: {naveSelec.manufacturer}</div>
              <div> {`Length: ${naveSelec.length} m.`}</div>
              <div> Crew: {naveSelec.crew}</div>
              <div> Passengers: {naveSelec.passengers}</div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </>
  );
}