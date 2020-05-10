const createEvent = (event) => {
  return ({
    type: 'CREATE_EVENT',
    payload: event,
  });
};

export default createEvent;
