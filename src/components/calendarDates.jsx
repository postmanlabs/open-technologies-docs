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
            date: Start_Time
            title: Title
            duration: Duration
            link: Link
            }
          }
          id
      }
    }
  `);

  const Events = CalendarData.calendarData.records
  //sort date chronological
 const sortedEvents = Events.sort((a, b) => (a.fields.date.toLowerCase() < b.fields.date.toLowerCase()) ? -1 : ((b.fields.date.toLowerCase() > a.fields.date.toLowerCase()) ? 1 : 0));

  return (
    <div >
      {sortedEvents.map((event) => (
        <EventStyles className='mb-2' key={uuidv4()}>
          <p className='mb-0 date'>
          {event.fields.date.slice(0, 10).split('-').reverse().join('/').replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')}{' '}
          
          {/* {event.fields.date.slice(20,25).toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' })} */}
          {/* {console.log(event.fields.date)} */}
    </p>
          <div>{event.fields.link ? (<a href={event.fields.link} target="_blank" rel="noopener">{event.fields.title} →</a>) : event.fields.title}</div>
        </EventStyles>
      ))}

    </div>
  );
}


export default CalendarDates;

