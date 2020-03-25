import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <frames>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </frames>
    );
  }
}

export default App;
