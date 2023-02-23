import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';

const EventStyles = styled.div`
  .date {
    color: ${(props) => props.theme.colors.orange_50};
  }
`

function CalendarDates() {  
 
 const CalendarData = useStaticQuery(graphql`
      query {
        calendarData {
          records {
            fields {
            date: Start_Time(formatString: "MM/DD/YYYY h:mm a z")
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
      <EventStyles className='mb-2' key={uuidv4()}>
        <p className='mb-0 date'>{event.fields.date}</p>
        { event.fields.Link ? (<a  href={event.fields.Link} target="_blank" rel="noopener">{event.fields.title} →</a>)  : event.fields.title }
      </EventStyles>  
      ))}
              
    </div>
  );
}


export default CalendarDates;

