import React from "react";
import HoverRating from "./rating";

const BoxContent = () => {
  const ratingItems = [
    "Compassion and Empathy",
    "Professionalism       ",
    "Skill and Competence  ",
    "Communication         ",
    "Reliability and Punctuality",
  ];

  return (
    <div className="flex flex-col gap-10 px-20 text-[#314154] ">
      <h1>Give your feedback</h1>
      <p className="text-lg">How was your experience?</p>
      <div>
        {ratingItems.map((item, index) => (
          <div className="flex flex-row text-lg gap-20 py-2" key={index}>
            <p className="pr-5">{item}</p>
            <HoverRating />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxContent;
