import React from "react";
import { ConceptCard } from "../filterCards/ConceptCards";
const { v4: uuidv4 } = require('uuid');

const FilterCard = ({ cardItem }) => {
  //sort card title alphabetically
  let sortedTitles = cardItem.sort((a, b) => (a.fields.title.toLowerCase() < b.fields.title.toLowerCase()) ? -1 : ((b.fields.title.toLowerCase() > a.fields.title.toLowerCase()) ? 1 : 0));

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {sortedTitles.map((item) => {
            return (
              <div className="col-lg-6 mb-3 mb-md-4" key={uuidv4()}>
                <ConceptCard title={item.fields.title}
                  description={item.fields.description}
                  tag={item.fields.tag}
                  example={item.fields.example}
                  source={item.fields.source}
                  id={item.fields.id}
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