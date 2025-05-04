import React from "react";
import teams_img from "../../../img/Teams";
import "../../../Styles/MatchCard.css";

export default function MatchCard({ date, score, opponent, tier, tournament }) {
  const [home, away] = score.split(":").map(Number);
  let badge = "", BadgeClass = "";
  if (home > away)       { badge = "V"; BadgeClass = "Win"; }
  else if (home < away)  { badge = "D"; BadgeClass = "Loss"; }
  else                   { badge = "E"; BadgeClass = "Draw"; }

  const HomeLogo     = teams_img["FURIA"];
  const OpponentLogo = teams_img[opponent];
  const dt = new Date(date);

  const dateStr = dt.toLocaleDateString('pt-BR');     
  return (
    <div className="Match-Card">
      <div className="Match-Card-Header">
        <span>{tournament}</span>
        <span className="Match-Card-Sep">·</span>
        <span>{tier}</span>
        <span className="Match-Card-Sep">·</span>
        <span>{dateStr}</span>
      </div>

      <div className="Match-Card-Body">
        <div className="Match-Infos">
          <div className="Team Team-Home">
            <div className="Team-Info">
              {HomeLogo && <img src={HomeLogo} alt="FURIA" className="Team-Logo" />}
              <span className="Team-Name">FURIA</span>
            </div>
            <span className="Team-Score">{home}</span>
          </div>
          <div className="Team Team-Away">
            <div className="Team-Info">
            {OpponentLogo
                ? <img src={OpponentLogo} alt={opponent} className="Team-Logo" />
                : <div className="Team-Logo Placeholder">?</div>
              }
              <span className="Team-Name">{opponent}</span>
            </div>
            <span className="Team-Score">{away}</span>
          </div>
        </div>
        <div className={`Result-Badge Result-${BadgeClass}`}>
          {badge}
        </div>
      </div>
    </div>
  );
}
