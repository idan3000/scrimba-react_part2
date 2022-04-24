import React from "react";

import imagesData from "../imagesData";

const imgSrcReName = (ingName) => {
  const ingName2 = ingName.replaceAll(`-`, `_`);
  return ingName2.split(`.`)[0];
};

const BadgeText = (props) => {
  if (props.openSpots === 0)
    return <div className="card--badge"> sold out</div>;
  if (props.location === "Online")
    return <div className="card--badge"> Online</div>;
};

export default function Card(props) {
  const { openSpots, location, stats, title, price, coverImg } = props;
  const imageSrc = imgSrcReName(coverImg);
  return (
    <div className="card">
      <BadgeText openSpots={openSpots} location={location} />
      <img src={imagesData[imageSrc]} alt={title} className="card--image" />
      <div className="card--stats">
        <img src={imagesData.star} alt="star" className="card--star" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
