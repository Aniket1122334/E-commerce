import React from "react";

const Partner = () => {
  return (
    <div className="partner-box w-full bg-[#F6F8FA] min-h-[6rem] flex items-center justify-center py-10">
      {/* ____________________________________________________________________ */}
      <div className="inner-partner-box flex flex-col w-[90%] md-custom:w-[80%] min-h-[18rem] gap-10 justify-center items-center">
        {/* ____________________________________________________________________ */}
        <div className="trusted-partner-name flex justify-center items-center flex-wrap h-[6rem] animate-fade-in">
          <h2 className="text-2xl sm-custom:text-3xl md-custom:text-4xl uppercase font-bold text-center">
            Our Trusted Partners
          </h2>
        </div>
        <div className="partner-image flex justify-center items-center gap-6 md-custom:gap-10 min-h-[9.5rem] flex-wrap animate-slide-up">
          <img
            className="w-[8rem] md-custom:w-[10rem]"
            src="/images/company1.png"
            alt="Company 1"
          />
          <img
            className="w-[8rem] md-custom:w-[10rem]"
            src="/images/company2.png"
            alt="Company 2"
          />
          <img
            className="w-[8rem] md-custom:w-[10rem]"
            src="/images/company3.png"
            alt="Company 3"
          />
          <img
            className="w-[8rem] md-custom:w-[10rem]"
            src="/images/company4.png"
            alt="Company 4"
          />
          <img
            className="w-[8rem] md-custom:w-[10rem]"
            src="/images/company5.png"
            alt="Company 5"
          />
          <img
            className="w-[8rem] md-custom:w-[10rem]"
            src="/images/company6.png"
            alt="Company 6"
          />
        </div>
      </div>
    </div>
  );
};

export default Partner;
