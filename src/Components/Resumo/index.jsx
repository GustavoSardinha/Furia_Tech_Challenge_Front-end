import React from "react";
import DescCard from "../DescCard";
import "../../Styles/App.css"
//players
import molodoy from "../../img/Players/molodoy.png"
import yekindar from "../../img/Players/yekindar.png"
import fallen from "../../img/Players/fallen.png"
import kscerato from "../../img/Players/kscerato.png"
import yuurih from "../../img/Players/yuurih.png"
import skullz from "../../img/Players/skullz.png"
import chelo from "../../img/Players/chelo.png"
//coachs
import sidde from "../../img/Coachs/sidde.png"
import hepa from "../../img/Coachs/hepa.png"
import krizzen from "../../img/Coachs/krizzen.png"
export default function Resumo(){
  const players = [
    {
      name: 'MOLODOY',
      country: 'Ukraine',
      flagUrl: 'https://flagcdn.com/w40/ua.png',
      imgUrl: molodoy,
    },
    {
      name: 'YEKINDAR',
      country: 'Latvia',
      flagUrl: 'https://flagcdn.com/w40/lv.png',
      imgUrl: yekindar,
    },
    {
      name: 'FalleN',
      country: 'Brazil',
      flagUrl: 'https://flagcdn.com/w40/br.png',
      imgUrl: fallen,
    },
    {
      name: 'KSCERATO',
      country: 'Brazil',
      flagUrl: 'https://flagcdn.com/w40/br.png',
      imgUrl: kscerato,
    },
    {
      name: 'yuurih',
      country: 'Brazil',
      flagUrl: 'https://flagcdn.com/w40/br.png',
      imgUrl: yuurih,
    },
  ];
  const bench = [
    {
      name: 'skullz',
      country: 'Brazil',
      flagUrl: 'https://flagcdn.com/w40/br.png',
      imgUrl: skullz,
    },
    {
      name: 'chelo',
      country: 'Brazil',
      flagUrl: 'https://flagcdn.com/w40/br.png',
      imgUrl: chelo,
    },
  ];
  const coachs = [
    {
      name: 'Hepa',
      country: 'Spain',
      flagUrl: 'https://flagcdn.com/w40/es.png',
      imgUrl: hepa,
    },
    {
      name: 'sidde',
      country: 'Brazil',
      flagUrl: 'https://flagcdn.com/w40/br.png',
      imgUrl: sidde,
    },
    {
      name: 'KrizzeN',
      country: 'Kazakhstan',
      flagUrl: 'https://flagcdn.com/w40/kz.png',
      imgUrl: krizzen,
    },
  ];
  return(
  <div>
    <div className="Info">
      <p className="List-Info"><strong>Valve ranking:</strong><span className="value">#18</span></p> 
      <p className="List-Info"><strong>Pontos:</strong> <span className="value">1211</span></p>
      <p className="List-Info"><strong>Ranking mundial:</strong> <span className="value">#17</span></p>
      <p className="List-Info"><strong>Ranking brasileiro:</strong> <span className="value">#2</span></p>
      <p className="List-Info"><strong>Média de idade dos jogadores:</strong> <span className="value">26.2</span></p>
    </div>
    <h3 className='Subtitle'>Line-up Titular</h3>
    <div className="Card-Div">
      {players.map((player) => (
        <DescCard key={player.name} {...player} />
      ))}
    </div>
    <h3 className='Subtitle'>Reservas</h3>
    <div className="Card-Div">
      {bench.map((player) => (
        <DescCard key={player.name} {...player} />
      ))}
    </div>
    <h3 className='Subtitle'>Coaches</h3>
    <div className="Card-Div">
      {coachs.map((coach) => (
        <DescCard key={coach.name} {...coach} />
      ))}
    </div>
  </div>
  )
}