const createEvent = (event) => {
  return {
    type: 'CREATE_EVENT',
    // status:'REQUEST',
    payload: event,
  };
};

export default { createEvent };
