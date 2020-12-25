import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./data";
export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];
  const handleLeft = () => {
    if (index !== 0) {
      return setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index !== data.length - 1) {
      return setIndex(index + 1);
    }
  };
  const randomPerson = () => {
    const random = Math.floor(Math.random() * data.length);
    if (random === index) {
      random + 1;
    }
    return setIndex(random);
  };
  return (
    <article className="profiles">
      <div className="imageContainer">
        <img src={image} alt={name} className="images" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p>{job}</p>
      <p>{text}</p>
      <button onClick={handleLeft} className="btn">
        <FaChevronLeft />
      </button>
      <button onClick={handleRight} className="btn">
        <FaChevronRight />
      </button>
      <br />
      <button onClick={randomPerson} className="random">
        Surprise Me
      </button>
    </article>
  );
}
