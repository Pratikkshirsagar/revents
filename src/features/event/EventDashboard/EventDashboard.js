import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventActions';
const mapStateToProps = state => ({
  events: state.events
});

const action = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancle = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      isOpen: false
    }));
  };

  handleSelectedEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(({ events }) => ({
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvents = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} selectedEvent={this.handleSelectedEvent} deleteEvent={this.handleDeleteEvents} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleCreateFormOpen} positive content="create Event" />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updatedEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancleFormOpen={this.handleFormCancle}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, action)(EventDashboard);
