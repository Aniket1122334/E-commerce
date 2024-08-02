import React, { useState } from "react";

const MyImage = ({ img = [] }) => {
  const [mainImage, setMainImage] = useState(img[0]);

  return (
    <div className="flex flex-col gap-[4rem] md:flex-row justify-center items-center h-full p-4">
      {/* Thumbnail images */}
      <div className="flex flex-col gap-4 md:gap-6 mb-4 md:mb-0">
        {img.map((currentElem, i) => (
          <figure
            key={i}
            className="w-24 h-24 md:w-32 md:h-32 bg-slate-200 flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
            onClick={() => setMainImage(currentElem)}
          >
            <img
              src={currentElem}
              alt={`Thumbnail ${i}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
        ))}
      </div>

      {/* Main image */}
      <div className="bg-slate-200 shadow-lg w-80 h-90 md:w-96 md:h-96 rounded-xl flex justify-center items-center ">
        <figure className="w-full h-full flex justify-center items-center">
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default MyImage;
