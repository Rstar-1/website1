import React from "react";

const Banner = () => {
  return (
    <div className="relative h-banner">
      <img
        src="https://html.creativegigstf.com/charles/images/home/inner-banner.jpg"
        alt="banner"
        className="w-full h-banner filter-b4 object-cover"
      />
      <div className="absolute top-0 text-center left-0 flex items-center justify-start h-banner">
        <div className="w-full container mx-auto">
          <h3 className="textwhite font-800 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize45 md-fsize35 sm-fsize24">
            Blogs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
