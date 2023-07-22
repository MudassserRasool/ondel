import React from "react";
import Style from "./Coleboration.module.css";

import { Link } from "react-router-dom";
import { ColaborationConnectionIcon } from "../../assets";

const Coleboration = ({ pageData }) => {
  return (
    <div className={Style.ondelReportingSectionMarginTop}>
      <div className="container">
        {/* start items and text----------------------------------------------- */}
        <div className="d-md-flex justify-content-between align-items-start">
          {/* start left text section---------------------------- */}
          <div className="col-md-5">
            <h1 className={Style.blueHeading}>
              {pageData.length > 0 &&
                pageData[0]?.InventoryReportingHeadingBlueLatter}
            </h1>
            <h1 className={Style.blackHeading}>
              {pageData.length > 0 &&
                pageData[0]?.InventoryReportingHeadingBlackLatter}
            </h1>

            <p className={Style.mainPara}>
              {pageData.length > 0 && pageData[0]?.InventoryReportingPara}
            </p>
          </div>
          {/* end left text section---------------------------- */}

          {/* start right text section---------------------------- */}
          <div className="col-md-5 mt-2 mt-md-0">
            {/* start ai powered items-------------------- */}
            <div className={Style.itemsGrid}>
              {/* <div className="d-grid reportMannagmentItemsGrid"> */}
              {/* start ai powered item-------------------- */}

              {pageData.length > 0 &&
                pageData[0]?.InventoryReportingItems.map(
                  (mapedItemsData, index) => (
                    <div className={Style.itemsArrangement} key={index}>
                      <img
                        src={mapedItemsData.icon}
                        alt="not found"
                        className={Style.icons}
                      />
                      <div className={Style.itemsTextSection}>
                        <h1 className={Style.itemName}>
                          {mapedItemsData.heading}
                        </h1>
                        <p className={Style.itemDiscription}>
                          {mapedItemsData.para}
                        </p>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
          {/* end right text section---------------------------- */}
        </div>
        {/* end items and text----------------------------------------------- */}
      </div>
      {/* start coleboration Icon-------------------------------------------------- */}
      <img src={ColaborationConnectionIcon} alt="connectivity icon"  className={Style.ColaborationConnectionIcon}/>
        {/* end coleboration Icon-------------------------------------------------- */}
    </div>
  );
};

export default Coleboration;
