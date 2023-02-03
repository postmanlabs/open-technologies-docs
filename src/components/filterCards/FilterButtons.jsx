import React from "react";
import { TagStyles } from "./Tag";
const { v4: uuidv4 } = require('uuid');

const FilterButtons = ({ button, filter }) => { 
  
  return (
    <>
      <div className="col-md-10 mx-auto mb-4 ">
      {
        button.map((tag, i)=>{
          return <TagStyles key={uuidv4()} data-text={tag} type="button" onClick={()=> filter(tag)} className="btn">{tag}</TagStyles>
              })
            }
      </div>
    </>
  );
};

export default FilterButtons;