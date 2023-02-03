import React from "react";
import { ConceptCard } from "../filterCards/ConceptCards";
const { v4: uuidv4 } = require('uuid');

const FilterCard = ({ cardItem }) => {

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">         
        { cardItem.map((item) =>{
          return (
            <div className="col-lg-6 mb-3 mb-md-4" key={uuidv4()}>    
              <ConceptCard title={item.fields.title}
                description={item.fields.description}
                tag={item.fields.tag}
                example={item.fields.example}
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