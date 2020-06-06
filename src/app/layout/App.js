import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../Theme';
import SearchPage from '../../features/home/SearchPage';
import SearchDetailsPage from '../../features/home/SearchDetailsPage';
import SearchView from '../../features/home/SearchView';
import HomePage from '../../features/home/HomePage';
import EnquiryPage from '../../features/event/eventform/EventForm';

import EventDashBoard from '../../features/event/eventdashboard/EventDashboard.jsx';
import UserListings from '../../features/user/userdetailed/UserListings';
import { UpdateEventPage } from '../../features/user/userdetailed/UserListings';
import NavBar from '../../features/nav/NavBar/NavBar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <EventDashBoard /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/SearchDetailsPage'
            component={SearchDetailsPage}
          />
          <Route exact path='/postad' component={EnquiryPage} />
          <PrivateRoute
            exact
            path='/updatelisting'
            component={UpdateEventPage}
          />
          {/* <Route
            exact
            path='/updateevent'
            render={(props) => <UpdateEventPage {...props} />}
          /> */}
          <PrivateRoute exact path='/myads' component={UserListings} />
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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default App;
