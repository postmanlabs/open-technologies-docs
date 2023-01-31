import React from "react";
import { TagButtonStyles } from "./Tag";
const { v4: uuidv4 } = require('uuid');

const FilterButtons = ({ button, filter }) => {
    console.log(button, "button")

  return (
    <>
      <div className="d-flex justify-content-center mx-auto mb-4">
      {
                button.map((cat, i)=>{
                    return <TagButtonStyles key={uuidv4()} data-text={cat}  type="button" onClick={()=> filter(cat)} className="btn">{cat}</TagButtonStyles>
                })
            }

      </div>
    </>
  );
};

export default FilterButtons;