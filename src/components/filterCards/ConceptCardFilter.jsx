import React, { useState } from 'react';
import items from './Data';
import FilterCard from "./FilterCard";
import FilterButtons from "./FilterButtons";

const setOfTags = [ ...new Set(items.map(item => item.tag))];
let allCategories = ['All'];
setOfTags.forEach(item => {
  item.forEach(category => allCategories.push(category))
}
)
allCategories = [...new Set(allCategories)]

function ConceptCardFilter() {
  const [cardItem, setCardItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if(button === 'All'){
      setCardItem(items);
      return;
    }
    const filteredData = items.filter(item => item.tag.includes(button));
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