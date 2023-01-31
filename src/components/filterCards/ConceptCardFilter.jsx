import React, { useState } from 'react';
import items from './Data';
import FilterCard from "./FilterCard";
import FilterButtons from "./FilterButtons";

const allCategories = ['All', ...new Set(items.map(item => item.tag))];

// console.log(allCategories, 'all');

function ConceptCardFilter() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.tag ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div >
       
                    <FilterButtons button={buttons} filter={filter} />
                    
                    <FilterCard menuItem={menuItem} />
                
               
    </div>
  );
}

export default ConceptCardFilter;