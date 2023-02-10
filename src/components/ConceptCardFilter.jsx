import React, {  useState } from 'react';
import FilterCard from "./filterCards/FilterCard";
import FilterButtons from "./filterCards/FilterButtons";
import { graphql, useStaticQuery } from "gatsby";

function ConceptCardFilter() {  
 
 const gatsbyRepoData = useStaticQuery(graphql`
      query {
        resultData {
          records {
            fields {
            description: Description
            example: Example
            tag: Tags
            title: Term
            }
          }
          id
      }
    }
  `);

  /*Create filter buttons*/
const setOfTags = [ ...new Set(gatsbyRepoData.resultData.records.filter(q => !!q).map(item => item.fields.tag).filter(q => !!q))];

let allCategories = ['All'];
setOfTags?.forEach(item => {
  item.forEach(category => allCategories.push(category))
}
)

allCategories = [...new Set(allCategories)];
const items = gatsbyRepoData.resultData.records;

  const [cardItem, setCardItem] = useState(items);
  const [buttons] = useState(allCategories);
  const [ activeButton, setButton] = useState('')
  //Filter Function for cards showing from choice
  const filter = (button) => {
    if (button === 'All') {
      console.log(items)
      setCardItem(items);
    } else {
      const filteredData = items.filter(item => item.fields.tag?.includes(button));
      setCardItem(filteredData)
    }

    let tags = document.querySelectorAll(`p.btn[data-text]`)
    tags.forEach(tag => {
      if (tag.innerHTML
        === button) {
        setButton(tag.innerHTML)
      }
    })
  }
  return (
    <div >    
      <FilterButtons button={buttons} activeButton={activeButton}  filter={filter} />
        <FilterCard cardItem={cardItem} />             
    </div>
  );
}


export default ConceptCardFilter;

