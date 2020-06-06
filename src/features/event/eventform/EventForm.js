import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import allActions from '../../../app/actions';
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Snackbar,
  CircularProgress,
  Paper,
} from '@material-ui/core/';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  //KeyboardTimePicker,
  KeyboardDatePicker,
  //DateTimePicker,
} from '@material-ui/pickers';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';
import { Formik, Form } from 'formik'; //ErrorMessage, Field, FastField
import * as Yup from 'yup';
import 'date-fns';

import { NavLink } from 'react-router-dom';
import axios from 'axios';

// import { DisplayFormikState } from './formikHelper';

// import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

const useFormStyles = makeStyles((theme) => ({
  textField: {
    color: '#37424A',
    margin: '0px 0px 20px',

    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInputBase-input': {
      //change padding
    },
    '& .MuiInputLabel-root': {},
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: '#eaeaea',
      },
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      '&.Mui-focused fieldset': {
        border: '1px solid',
        borderColor: 'green',
      },
    },
  },
  dateField: {
    color: '#37424A',
    margin: '0px 0px 20px',

    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInputBase-input': {
      //change padding
    },
    '& .MuiInputLabel-root': {},
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {},
      '&:hover fieldset': {},
      '&.Mui-focused fieldset': {
        border: '1px solid',
        borderColor: 'green',
      },
    },
  },

  privacyNotice: {
    paddingBottom: '40px',
    '& .MuiButtonBase-root': {
      alignSelf: 'flex-start',
    },
  },

  callBackTime: {
    width: '100%',
  },

  title: {
    color: '#37424A',
    fontSize: '26px',
    lineHeight: '2rem',
    margin: '40px 0px',
  },
  content: {
    color: '#37424A',
    fontSize: '0.875rem',
    fontWeight: '400',
    margin: '0px 0px 20px',
  },
  submitButton: {
    background: '#2CA6BD',
    color: '#ffffff',
    transition: theme.transitions.create(['background'], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.complex,
    }),

    '&:hover': {
      background: '#24889B',
    },
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: 'relative',
  },
}));
//const enquiryFormEndpoint = process.env.AUTOMOBILE_APP_ENQUIRY_ENDPOINT;

const EnquiryPage = ({
  initialValues = {
    name: '',
    mileage: '',
    // eventDate: null,
    city: '',
    district: '',
    description: '',
    price: null,
    brand: '',
    model: '',
    edition: '',
    contactno: null,
    condition: '',
    transmission: '',
    bodytype: '',
    fueltype: '',
    enginecapacity: null,

    // email: '',
  },
  update = false,

  ...rest
}) => {
  //Do we need to write props as a argument yes
  console.log('initialValues_', initialValues);
  const handleSubmit = (values) => {
    console.log('handleSubmit -> values', values);
    firestore
      .collection('users')
      .doc(uid)
      .collection('listings')
      .add({ ...values, isSold: false })
      .then((docRef) => {
        docRef.update({
          listingID: docRef.id,
          eventDate: new Date().toLocaleString('en-GB', {
            // weekday: 'numeric',
            // year: 'numeric',
            day: 'numeric',
            month: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: 'true',
          }),
        });
      })
      .then(() => setSubmitionCompleted(true));
  };

  const handleUpdate = (values) => {
    console.log('handleUpdate -> values', values);
    console.log(
      'handleUpdate -> initialValues.listingID',
      initialValues.listingID
    );
    firestore
      .collection('users')
      .doc(uid)
      .collection('listings')
      .doc(initialValues.listingID)
      .update({
        ...values,
        modifiedDate: new Date().toLocaleString('en-GB', {
          // weekday: 'numeric',
          // year: 'numeric',
          day: 'numeric',
          month: 'long',
          hour: 'numeric',
          minute: 'numeric',
          hour12: 'true',
        }),
      })
      .then(() => setSubmitionCompleted(true))
      .catch((err) => console.log('handleUpdate -> err', err));

    console.log('handleUpdate -> isSubmitionCompleted', isSubmitionCompleted);
  };
  // const onSubmit = (values, { dispatch, setSubmitting }) => {
  //   console.log('onSubmit -> dispatch', dispatch);
  //   console.log('onSubmit -> values', values);

  //   dispatch(allActions.eventActions.createEvent(values));
  // };
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  // const onSubmit = (values, { setSubmitting }) => {
  //   setSubmitting(true);
  //   console.log(values);
  //   axios
  //     .post(enquiryFormEndpoint, values, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((resp) => {
  //       setSubmitionCompleted(true);
  //       setOpen(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    mileage: Yup.number().required('Required'),
    //eventDate: Yup.date().nullable().required('Required'),
    // city: Yup.string().required('Required'),
    // district: Yup.string().required('Required'),
    // description: Yup.string().required('Required'),
    // price: Yup.number().required('Required'),
    // brand: Yup.string().required('Required'),
    // model: Yup.string().required('Required'),
    // edition: Yup.string().required('Required'),
    // contactno: Yup.number().required('Required'),
    // condition: Yup.string().required('Required'),
    // transmission: Yup.string().required('Required'),
    // bodytype: Yup.string().required('Required'),
    // fueltype: Yup.string().required('Required'),
    // enginecapacity: Yup.number().required('Required'),
    //email: Yup.string().email().required('Required'),
  });

  return (
    <React.Fragment>
      {!isSubmitionCompleted && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            // submit the values to users/{uid}/listings collection
            // check UID is set
            // firestore
            //   .collection('users')
            //   .doc(uid)
            //   .collection('listings')
            //   .add({ ...values, isSold: false })
            //   .then((docRef) => {
            //     docRef.update({
            //       listingID: docRef.id,
            //     });
            //   });
            console.log('values', values);
            update ? handleUpdate(values) : handleSubmit(values);

            // setTimeout(() => {
            //   props.dispatch(allActions.eventActions.createEvent(values));
            //   console.log('allActions.createEvent', allActions.createEvent);
            //   alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            // }, 1000);
          }}
          validationSchema={validationSchema}
          render={(props) => <EnquiryForm {...props} />}
        ></Formik>
      )}
      {isSubmitionCompleted && (
        <React.Fragment>
          <Button type='button' className='outline' component={NavLink} to='/'>
            Back to app
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={12000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleClose} severity='success'>
              This is a success message!
            </Alert>
          </Snackbar>
        </React.Fragment>
      )}

      {/* </Dialog> */}
    </React.Fragment>
  );
};

const EnquiryForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  const formStyles = useFormStyles();

  return (
    <Box mt={3} px={3}>
      <Typography className={formStyles.title}>Get in touch</Typography>
      <Typography className={formStyles.content}>
        Please continue to fill out the form below.
      </Typography>

      <Form onSubmit={handleSubmit}>
        <MyTextField name='name' label='name *' {...props} />
        <MyTextField name='mileage' label='mileage *' {...props} />
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            clearable
            disablePast
            error={errors.eventDate && touched.eventDate}
            helperText={
              errors.eventDate && touched.eventDate && errors.eventDate
            }
            className={formStyles.dateField}
            id='date-picker-dialog'
            label='event date *'
            inputVariant='outlined'
            format='MM/dd/yyyy'
            value={values.eventDate}
            onBlur={(eventDate) =>
              props.setFieldTouched('eventDate', true, true)
            }
            onChange={(eventDate) => {
              props.setFieldTouched('eventDate', true, true);
              props.setFieldValue('eventDate', eventDate);
            }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider> */}
        <MyTextField name='city' label='city' {...props} />
        <MyTextField name='district' label='district' {...props} />
        <MyTextField name='description' label='description' {...props} />
        <MyTextField name='price' label='price' {...props} />
        <MyTextField name='brand' label='brand' {...props} />
        <MyTextField name='model' label='model' {...props} />
        <MyTextField name='edition' label='edition' {...props} />
        <MyTextField name='contactno' label='contactno' {...props} />
        <MyTextField name='condition' label='condition' {...props} />
        <MyTextField name='transmission' label='transmission' {...props} />
        <MyTextField name='bodytype' label='bodytype' {...props} />
        <MyTextField name='fueltype' label='fueltype' {...props} />
        <MyTextField name='enginecapacity' label='enginecapacity' {...props} />
        <Grid container justify='center' spacing='1'>
          <Grid item>
            <Button
              variant='outlined'
              size='medium'
              // color='secondary'
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </Button>
          </Grid>
          <Grid item>
            <div className={formStyles.wrapper}>
              <Button
                variant='contained'
                size='medium'
                color='primary'
                //className={formStyles.submitButton}
                style={isSubmitting ? { background: '#ffffff' } : undefined}
                type='submit'
                disabled={isSubmitting}
              >
                Send my enquiry
              </Button>
              {isSubmitting && (
                <CircularProgress
                  size={24}
                  className={formStyles.buttonProgress}
                />
              )}
            </div>
          </Grid>

          {/* <DisplayFormikState {...props} /> */}
        </Grid>
        <pre>{JSON.stringify(errors, null, 4)}</pre>
        <pre>{JSON.stringify(values, null, 4)}</pre>
      </Form>
    </Box>
  );
};

const MyTextField = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  name,
  label,
}) => {
  const formStyles = useFormStyles();
  return (
    <TextField
      disabled={isSubmitting}
      error={errors[name] && touched[name]}
      label={label}
      name={name}
      className={formStyles.textField}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={errors[name] && touched[name] && errors[name]}
      margin='none'
      variant='outlined'
      fullWidth
    />
  );
};
export default EnquiryPage;
