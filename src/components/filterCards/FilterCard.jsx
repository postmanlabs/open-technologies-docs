import React from "react";
import { ConceptCard } from "../MarketingPages/ConceptCards";
// const { v4: uuidv4 } = require('uuid');

const FilterCard = ({ item }) => {
  // console.log(item, "card")
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((info) => {
            return (
              <div key={info.id} className="col-lg-6 mb-3 mb-md-4 ">

              <ConceptCard
                title={info.title}
                description={info.description}
                tag={info.tag}
                code={info.code}
              />
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterCard;