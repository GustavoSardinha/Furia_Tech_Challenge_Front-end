import React, { useEffect, useState } from "react";
import api from "../../Services/API/backend";
import MatchCard from "./MatchCard";
import "../../Styles/MatchCard.css";

export default function Partidas() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.get("/api/matches?page=FURIA")
       .then(res => setMatches(res.data.results))
       .catch(console.error);
  }, []);

  return (
    <div className="Matches-Container">
      <h3 className="Subtitle">Últimas Partidas</h3>
      {matches.map(m => (
        <MatchCard
          key={`${m.date}-${m.opponent}`}
          date={m.date}
          score={m.score}
          opponent={m.opponent}
          tier={m.tier}
          tournament={m.tournament}
        />
      ))}
    </div>
  );
}
