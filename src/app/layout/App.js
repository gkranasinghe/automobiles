import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../Theme';

import HomePage from '../../features/home/HomePage';
import EventDashBoard from '../../features/event/eventdashboard/EventDashboard.jsx';
import NavBar from '../../features/nav/NavBar/NavBar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <EventDashBoard /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/events' component={EventDashBoard} />
        </Switch>
        {/* <Route exact path='/event/:id' component={EventDetailedPage} />
      <Route exact path='/people' component={PeopleDashBoard} />
      <Route exact path='/profile/:id' component={UserDetailedPage} />
      <Route exact path='/settings' component={SettingsDashBoard} />
      <Route exact path='/createEvent' component={EventForm} /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
