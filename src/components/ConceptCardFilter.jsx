import React, { useState } from 'react';
import FilterCard from "./filterCards/FilterCard";
import FilterButtons from "./filterCards/FilterButtons";
import { graphql, useStaticQuery } from "gatsby";

function ConceptCardFilter() {

  const gatsbyData = useStaticQuery(graphql`
      query {
        cardData {
          records {
            fields {
            description: Description
            example: Example
            tag: Tags
            title: Term
            source: Source
            }
          }
          id
      }
    }
  `);

  /*Create filter buttons*/
  const setOfTags = [...new Set(gatsbyData.cardData.records.map(item => item.fields.tag))];

  let allCategories = ['All'];
//add tags to array
  setOfTags?.forEach(item => {
    if (item != null) {
      item.forEach(category => allCategories.push(category))
      }
  }
  )
  // filter out dupe tags 
  allCategories = [...new Set(allCategories)];

  const items = gatsbyData.cardData.records;

  const [cardItem, setCardItem] = useState(items);
  const [buttons] = useState(allCategories);
  const [activeButton, setButton] = useState('')
  //Filter Function for cards showing from choice
  const filter = (button) => {
    if (button === 'All') {
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
      <FilterButtons button={buttons} activeButton={activeButton} filter={filter} />
      <FilterCard cardItem={cardItem} />
    </div>
  );
}


export default ConceptCardFilter;
