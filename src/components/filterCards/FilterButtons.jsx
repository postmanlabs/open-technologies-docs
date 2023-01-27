import React from "react";
import Data from "./Data";
import { TagButtonStyles } from "./Tag"

const FilterButtons = ({ filterItem, setItem, cardItems }) => {
    // console.log(cardItems, "button")
  return (
    <>
      <div className="d-flex justify-content-center mx-auto mb-3">
        {cardItems.map((tag, id) => {
          return (
            <TagButtonStyles
                className={tag}
                data-text={tag}
                key={id}
                onClick={() => filterItem(tag)}
            >
                    {tag}
                </TagButtonStyles>
          );
        })}
         <TagButtonStyles
                    className="all"
                    onClick={() => setItem(Data)}
                  >
                    All
                  </TagButtonStyles>

      </div>
    </>
  );
};

export default FilterButtons;