import React, { useState, useContext } from "react";
import "./Hero.css";
import { WomanImageForHeroSection, WomanImageForHeroSectionMobileVersion } from "../../assets/index";
import { Link } from "react-router-dom";
// import { MyContext } from "../../context";

const Hero = ({ pageData }) => { 
  const isMobileScreen = window.innerWidth <= 768;
  return (
    <div className="coustomBg">
      <div className="container-fluid container-md pt-4">
        <div className="row justify-content-between coustomTextMarginHero">
          {/* start hero left text--------------------- */}
          <div className="my-auto pb-4 col-md-6 z-index-1">
          <div className="bookingBackgroundCoustom">
               <p className="bookingText">
              Booking Management System
            </p>
            </div>
            <div className="mt-2">
              <h1 className="clindexHeroHeading d-none d-md-block">{pageData.length > 0 && pageData[0]?.heroHeadingWebHomePageTitel}</h1>
              <h3 className="clindexHeroTitel d-none d-md-block">
                 {pageData.length > 0 && pageData[0]?.heroHeadingWeb}
              </h3>
              <h1 className="clindexHeroHeading d-md-none">{pageData.length > 0 && pageData[0]?.heroHeadingMobilePageTitel}</h1>
              <h3 className="clindexHeroTitel d-md-none">
                 {pageData.length > 0 && pageData[0]?.heroHeadingMobile}
              </h3>
            </div>
            <p className="heroParagraph  d-none d-md-block">
             {pageData.length > 0 && pageData[0]?.heroParaWeb}
            </p>
            <p className="heroParagraph  d-md-none">
             {pageData.length > 0 && pageData[0]?.heroParaMobile}
            </p>
            <div className="d-flex justify-content-between justify-content-md-start buttonsRowHero gap-2">
              <div className="letsTalkButtonBox">
                <p className="letsTalkCoustomText">Let's Talk</p>
              </div>
              <Link to={`${pageData.length > 0 && pageData[0]?.heroLearnMoreButton}`} className={`pb-4 text-decoration-none d-${pageData.length > 0 && pageData[0]?.heroLearnMoreButtonVisibility}`} onClick={() => {
                window.scrollTo(0, 0)
                }} >
               <div className="learnButtonButtonBoxHero">
                <p className="learnButtonCoustomTextHero">
                  Learn More
                </p>
              </div>
              </Link>

            </div>
          </div>

          {/* end hero left text--------------------- */}
          {/* start hero right image--------------------- */}

          <div className="col-md-6">
          <img
        src={WomanImageForHeroSection}
        alt="hero woman model"
        className={`heroWomanImageHomePage ${isMobileScreen ? "hideOnMobile" : "showOnMobile"}`}
      />
      {isMobileScreen && (
        <img
          src={WomanImageForHeroSectionMobileVersion}
          alt="hero woman model (mobile version)"
          className={`heroWomanImageHomePage ${isMobileScreen ? "showOnMobile" : "hideOnMobile"}`}
        />
      )}
          </div>

          {/* end hero right image--------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
