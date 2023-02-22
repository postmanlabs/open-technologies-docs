import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
const { v4: uuidv4 } = require('uuid');
import { format } from 'date-fns';

function CalendarDates() {  
 
 const CalendarData = useStaticQuery(graphql`
      query {
        calendarData {
          records {
            fields {
            date: Start_Time(formatString: "MM-DD")
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
        <p className='mb-0 '>{event.fields.date}</p>
        { event.fields.Link ? (<a  href={event.fields.Link} target="_blank" rel="noopener">{event.fields.title} →</a>)  : event.fields.title }
      </div>  
      ))}
              
    </div>
  );
}


export default CalendarDates;

