import React from "react";
import { ConceptCard } from "../MarketingPages/ConceptCards";
const { v4: uuidv4 } = require('uuid');

const FilterCard = ({ cardItem }) => {

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">         
        { cardItem.map((item) =>{
          return (
            <div className="col-lg-6 mb-3 mb-md-4" key={uuidv4()}>    
              <ConceptCard title={item.title}
                description={item.description}
                tag={item.tag}
                example={item.example}
                code={item.code}
               />
            </div>
            )
            })
            }
        </div>
      </div>    
    </>
  );
};

export default FilterCard;