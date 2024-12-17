import React from "react";
import Style from "./reviewPage.module.css"; // Import CSS file for styling

const Reviews = ({ query }) => {
  // If query exists, do not render the Reviews component
  if (query) return null;

  return (
    <section className={Style.mainContainer}>
      <h2 className={Style.reviewHeading}>What are our users saying?</h2>
      <div className={Style.reviewCardContainer}>
        <div className={Style.reviewCard} id={Style.kashif}></div>
        <div className={Style.reviewCard} id={Style.zayd}></div>
        <div className={Style.reviewCard} id={Style.tanzil}></div>
      </div>
    </section>
  );
};

export default Reviews;
