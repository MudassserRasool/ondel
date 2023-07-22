import React from "react";
import Style from "./AutomateProcess.module.css";
import { Link } from "react-router-dom";
import { CashControlIcon, MoneyInfoIcon, MoneyMapingIcon } from "../../assets";

const AutomateProcess = ({ pageData }) => {
  return (
    <div className={Style.componentArrangement}>
      <div className="container px-2 ">
        <div className="d-flex flex-column flex-md-row mx-auto mx-md-0">
          {/* start first section----------------- */}
          <div className="col-md-6">
            <h1 className={Style.automateHeading}>
              {pageData.length > 0 && pageData[0]?.automateProcessHeading}
            </h1>
            <p className={Style.automatePara}>
              {pageData.length > 0 && pageData[0]?.automateProcessPara}
            </p>
            <Link
              to={`${
                pageData.length > 0 && pageData[0]?.automateProcessButton
              }`}
              className={`pb-4 text-decoration-none d-${
                pageData.length > 0 &&
                pageData[0]?.automateProcessButtonVisibility
              }`}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <div className={Style.learnButtonBoxMannagement}>
                <p className={Style.learnButtonCoustomText}>Learn More</p>
              </div>
            </Link>
          </div>
          {/* end first section----------------- */}

          {/* start second section--------------------- */}
          <div className="col-md-6 mt-3 mt-md-0">
            {pageData.length > 0 &&
              pageData[0]?.automateProcessItems.map((mapedData) => (
                <div className="d-flex flex-column flex-md-row gap-md-4 px-2 mb-3 mb-md-4">
                  <img
                    src={mapedData.icon}
                    alt="icon not loaded"
                    className={Style.moneyMannageIcon}
                  />
                  <div className={Style.itemHeadingAndDiscription}>
                    <h1 className={Style.moneyMannageItemHeading}>
                      {mapedData.heading}
                    </h1>
                    <p className={Style.moneyMannageDiscription}>
                      {mapedData.para}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {/* start second section--------------------- */}
        </div>
      </div>
    </div>
  );
};

export default AutomateProcess;
