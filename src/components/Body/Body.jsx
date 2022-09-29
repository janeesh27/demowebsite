import React from "react";
import Image from "../Media/image.png";
import "./Body.css";
const Body = () => {
  return (
    <div className="main-body">
      <div className="i1">
        <img src={Image}></img>
      </div>

      <div className="text">
        <h3>What Are Indigenous Populations?</h3>
        <p>
          According to the World Health Organization, Indigenous populations
          identify as part of a distinct group or are descended from people who
          originate in areas that were their traditional lands that existed
          prior to the establishment of modern-day borders.<br></br>Indigenous
          people make up an estimated 5% of the world's population.While they
          have different backgrounds, cultures,and traditions,they often have a
          shared history of being uprooted and forced from their ancestral
          lands.Along with this, many face marginalization and discrimination in
          various forms including being prevented or denied the ability to live
          their traditions, express their cultures, and even speak their
          language.In order to understand many of the unique issues that
          Indigenous populations face, it is essential to gain a better
          understanding and awareness of Indigenous peoples, their history, and
          their cultures.
        </p>
        <button className="button1">Join Us</button>
      </div>
    </div>
  );
};

export default Body;
