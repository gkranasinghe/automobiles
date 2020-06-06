import React, { useState } from 'react';
// import firebase from '../../../app/config/firebase';
import EventListItem from '../../event/eventlist/EventListItem';
import { SearchResultCard } from '../../home/SearchDetailsPage';
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
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = useSelector((state) => state.firebase.auth);

  const firestore = useFirestore();
  useFirestoreConnect([`users/${uid}/listings`]);

  const users = useSelector((state) => state.firestore.data.users);

  users && console.log('UserListings -> users', users[uid]);
  let listings = null;
  if (users) {
    listings = users[uid].listings;
    console.log('UserListings -> listings', listings);
  }

  // if (users[uid]) {
  //   listings = users[uid].listing;
  // }
  const handleDelete = (listingid) => {
    console.log('handleDelete -> listingid', listingid);

    return firestore
      .collection('users')
      .doc(uid)
      .collection('listings')
      .doc(listingid)
      .delete();
  };
  const handleUpdate = (listing) => {
    dispatch({ type: 'UPDATE_EVENT_STARTED', payload: listing });
    history.push('/updatelisting');
  };
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
                // <UserListingItem
                //   key={listing.listingID}
                //   listing={listing}
                //   handleDelete={handleDelete}
                // />
                <SearchResultCard
                  key={listing.listingID}
                  item={listing}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
          })
        : 'fuk'}
      {/* Add a Loading Component here */}
    </div>
  );
};

// const UserListingItem = ({ listing }) => {
//   return (
//     <Box>
//       <Box>
//         <SearchResultCard item={listing} />
//       </Box>
//       <Box>
//         <DeleteButton color='primary' listingid={listing.listingID} />
//       </Box>
//       <Box>
//         <UpdateButton listingid={listing.listingID} />
//       </Box>
//     </Box>
//   );
// };

// const DeleteButton = ({ listingid, ...rest }) => {
//   console.log('DeleteButton -> listingid', listingid);

//   const firestore = useFirestore();
//   console.log('DeleteButton -> firestore', firestore);

//   const { uid } = useSelector((state) => state.firebase.auth);
//   console.log('DeleteButton -> uid', uid);
//   const handleDelete = () => {
//     return firestore
//       .collection('users')
//       .doc(uid)
//       .collection('listings')
//       .doc(listingid)
//       .delete();
//   };

//   return (
//     <Button {...rest} onClick={handleDelete}>
//       DeleteButton
//     </Button>
//   );
// };

// const UpdateButton = ({ listingid, ...rest }) => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const handleOpenForm = () => {
//     setModalOpen(true);
//   };

//   // const history = useHistory();
//   console.log('UpdateButton -> listingid', listingid);

//   const dispatch = useDispatch();
//   const history = useHistory();
//   const handleUpdate = () => {
//     dispatch({ type: 'UPDATE_EVENT_STARTED', payload: listingid });

//     history.push('/updateevent');
//   };
//   return (
//     <>
//       <Button {...rest} onClick={handleUpdate}>
//         UpdateButton
//       </Button>
//     </>
//   );
// };

export const UpdateEventPage = () => {
  const listing = useSelector((state) => state.user.listing);
  console.log('UpdateEventPage -> listing', listing);

  return <EnquiryPage initialValues={listing} update={true} />;
};

export default UserListings;
