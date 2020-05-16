import React from 'react';
import firebase from '../../../app/config/firebase';
import EventListItem from './EventListItem';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';


const EventList = () => {
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

      {/* Map behaviour is defferent from forEach */}
      {listings
        ? Object.values(listings).map((listing) => (
            <EventListItem listing={listing} />
          ))
        : 'nolisting'}
    </div>
  );
};

export default EventList;
