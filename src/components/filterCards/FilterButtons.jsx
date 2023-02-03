import React from "react";
import { ButtonTag } from "./Tag";
const { v4: uuidv4 } = require('uuid');

const FilterButtons = ({ button, filter }) => { 
  
  return (
    <>
      <div className="col-md-12 justify-content-center mx-auto mb-5">
      {
        button.sort().map((tag, i)=>{
          return <ButtonTag key={uuidv4()} data-text={tag} type="button" onClick={()=> filter(tag)} className="btn">{tag}</ButtonTag>
              })
            }
      </div>
    </>
  );
};

export default FilterButtons;