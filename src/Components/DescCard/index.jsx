import React from 'react';
import "../../Styles/DescCard.css"
export default function DescCard({ name, country, flagUrl, imgUrl }) {
  return (
    <div className="Desc-Card">
      <img src={imgUrl} alt={name} className="Desc-Image" />
      <div className="Desc-Info">
        <img src={flagUrl} alt={country} className="Flag" />
        <span>{name}</span>
      </div>
    </div>
  );
}
