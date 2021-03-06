import React, { Component } from 'react'
import EventLIstItem from './EventListItem'
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const {events, onEventOpen, deleteEvent} = this.props;
    return (
      <div>
        <h1>EventList</h1>
        {events.map((event)=>(
        <EventListItem key={event.id} event={event} onEventOpen={onEventOpen} deleteEvent={deleteEvent}/>
        ))}
      </div>
    )
  }
}

export default EventList