import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
const { v4: uuidv4 } = require('uuid');
import styled from 'styled-components';

import Moment from 'react-moment';
import 'moment-timezone';

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
          <Moment className='mb-0 date' tz="America/Los_Angeles" format='MM/DD/YYYY hh:mm a z'>{event.fields.date}</Moment>
          <div>{event.fields.link ? (<a href={event.fields.link} target="_blank" rel="noopener">{event.fields.title} →</a>) : event.fields.title}</div>
        </EventStyles>
      ))}

    </div>
  );
}


export default CalendarDates;

