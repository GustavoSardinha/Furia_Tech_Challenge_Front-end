import React, { useEffect, useState } from "react";
import teams_img from "../../img/Teams";
import C4 from "../../img/C4.png";
import api from "../../Services/API/backend";

export default function Acompanhar() {
  const [liveData, setLiveData] = useState(null);

  function toMinutes(time) {
    const min = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return min + ":" + seconds;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      api.get("/api/livestatus")
        .then(res => setLiveData(res.data))
        .catch(err => console.error("Erro ao buscar dados:", err));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  if (!liveData) return <p>Carregando status da partida...</p>;

  return (
    <div>
      <h3 className="Subtitle">Placar ao vivo</h3>
      <div className="Score-Container">
        <div className="Score-Div">
          <div className="Team-Score">
            <img src={teams_img["FURIA"]} className="Team-Logo" />
            <p className="Team-Score-Name">FURIA</p>
            <p className="Furia-Score">{liveData.furiaScore}</p>
          </div>
          <div className="Score-Infos">
            {liveData.c4 ? (
              <img src={C4} className="C4" />
            ) : (
              <h3 className="Time-Score">{toMinutes(liveData.time)}</h3>
            )}
            {!liveData.ended && <p>{"Round " + liveData.round}</p>}
          </div>
          <div className="Team-Score">
            <p className="Opponent-Score">{liveData.opponentScore}</p>
            <p className="Team-Score-Name">{liveData.opponent}</p>
            <img src={teams_img[liveData.opponent]} className="Team-Logo" />
          </div>
        </div>
      </div>

      <div className="Score-Container">
        <ul className="Live-List">
          {liveData.events.map((e, i) => (
            <li key={i} className="Live-Item Live-Event">💥 {e}</li>
          ))}
          {liveData.highlights.map((h, i) => (
            <li key={i} className="Live-Item Live-Highlight">🔥 {h}</li>
          ))}
        </ul>
      </div>

      <h3 className="Subtitle">Dados da partida</h3>
      <table className="Players-Data">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Kills</th>
            <th>Assists</th>
            <th>Deaths</th>
            <th>K/D</th>
          </tr>
        </thead>
        <tbody>
          {liveData.stats.map((p, i) => (
            <tr key={i} className="Player-Item">
              <td className={p.alive ? "Player-Name alive" : "Player-Name dead"}>{p.player}</td>
              <td>{p.kills}</td>
              <td>{p.assists}</td>
              <td>{p.deaths}</td>
              <td>{p.deaths !== 0 ? (p.kills / p.deaths).toFixed(2) : "0.00"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="Subtitle">Oponentes vivos: {liveData.opponentLive}</h3>
    </div>
  );
}
