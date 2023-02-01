import React, { useState } from 'react';
import items from './Data';
import FilterCard from "./FilterCard";
import FilterButtons from "./FilterButtons";

const allCategories = ['All', ...new Set(items.map(item => item.tag))];

function ConceptCardFilter() {
  const [cardItem, setCardItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if(button === 'All'){
      setCardItem(items);
      return;
    }
    const filteredData = items.filter(item => item.tag ===  button);
    setCardItem(filteredData)
  }

  return (
    <div >    
        <FilterButtons button={buttons} filter={filter} />
        <FilterCard cardItem={cardItem} />             
    </div>
  );
}

export default ConceptCardFilter;