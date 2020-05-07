import React from 'react';
import EventDashBoard from '../../features/event/EventDashBoard/EventDashboard.jsx';
import NavBar from '../../features/nav/NavBar/NavBar';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <EventDashBoard />
    </ThemeProvider>
  );
}

export default App;
