import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
const { v4: uuidv4 } = require('uuid');

function CalendarDates() {  
 
 const CalendarData = useStaticQuery(graphql`
      query {
        calendarData {
          records {
            fields {
            date: Start_Time
            title: Title
            duration: Duration
            Link
            }
          }
          id
      }
    }
  `);

const Events = CalendarData.calendarData.records

return (
  <div >         
    {Events.map((event) => (
      <div className='mb-2' key={uuidv4()}>
        { event.fields.Link ? (<a  href={event.fields.Link} target="_blank" rel="noopener">{event.fields.title} →</a>)  : event.fields.title }
      </div>  
      ))}
              
    </div>
  );
}


export default CalendarDates;

