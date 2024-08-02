import React from "react";
import { ImStarFull } from "react-icons/im";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const StarSection = ({ rating }) => {
  //   console.log(rating);

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <ImStarFull className="text-yellow-400" />
        ) : rating >= number ? (
          <FaStarHalfStroke className="text-yellow-400" />
        ) : (
          <FaRegStar className="text-yellow-400" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="icon-style flex text-[2.1rem]">{ratingStar}</div>
    </div>
  );
};

export default StarSection;
