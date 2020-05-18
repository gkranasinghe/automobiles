import React, { useState } from 'react';
// import firebase from '../../../app/config/firebase';
import EventListItem from '../../event/eventlist/EventListItem';

import EnquiryPage from '../../event/eventform/EventForm';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { Grid, Box, Button, Modal } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const UserListings = () => {
  // const { displayName, uid } = useSelector((state) => state.firebase.auth);
  // console.log("EventList -> uid", uid)
  // useFirestoreConnect({
  //   collection: 'users/{uid}/listings',
  //   storeAs: 'listings',
  // });
  // const listings = useSelector((state) => state.firestore.data.listings);
  // console.log('EventList -> listings', listings);

  useFirestoreConnect([
    {
      collectionGroup: 'listings',
      storeAs: 'listings',
    },
  ]);
  const listings = useSelector((state) => state.firestore.data.listings);

  return (
    <div>
      {/* {listings
        ? listings.map((listing) => (
            <EventListItem key={listing.listingID} event={listing} />
          ))
        : 'fuk'} */}

      {/* Map behaviour is different from forEach */}
      {listings
        ? Object.values(listings).map((listing) => {
            console.log('UserListings -> listing', listing);
            if (listing == null) {
              return null;
            } else if (listing != null)
              return (
                <UserListingItem key={listing.listingID} listing={listing} />
              );
          })
        : 'fuk'}
    </div>
  );
};

const UserListingItem = ({ listing }) => {
  return (
    <Box>
      <Box>
        <EventListItem listing={listing} />
      </Box>
      <Box>
        <DeleteButton color='primary' listingid={listing.listingID} />
      </Box>
      <Box>
        <UpdateButton listingid={listing.listingID} />
      </Box>
    </Box>
  );
};

const DeleteButton = ({ listingid, ...rest }) => {
  console.log('DeleteButton -> listingid', listingid);

  const firestore = useFirestore();
  console.log('DeleteButton -> firestore', firestore);

  const { uid } = useSelector((state) => state.firebase.auth);
  console.log('DeleteButton -> uid', uid);
  const handleDelete = () => {
    return firestore
      .collection('users')
      .doc(uid)
      .collection('listings')
      .doc(listingid)
      .delete();
  };

  return (
    <Button {...rest} onClick={handleDelete}>
      DeleteButton
    </Button>
  );
};

const UpdateButton = ({ listingid, ...rest }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenForm = () => {
    setModalOpen(true);
  };

  // const history = useHistory();
  console.log('UpdateButton -> listingid', listingid);

  const dispatch = useDispatch();
  const history = useHistory();
  const handleUpdate = () => {
    dispatch({ type: 'UPDATE_EVENT_STARTED', payload: listingid });

    history.push('/updateevent');
  };
  return (
    <>
      <Button {...rest} onClick={handleUpdate}>
        UpdateButton
      </Button>
    </>
  );
};

export const UpdateEventPage = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const listingid = useSelector((state) => state.user.refID);
  console.log('UpdateEventPage -> listingid', listingid);
  const firestore = useFirestore();
  const handleSubmit = (values) => {
    console.log('handleSubmit -> values', values);
    firestore
      .collection('users')
      .doc(uid)
      .collection('listings')
      .doc(listingid)
      .update(values);
  };
  return <EnquiryPage handleSubmit={handleSubmit} />;
};

export default UserListings;
