import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import { Typography, Box } from '@material-ui/core';
// import { DisplayFormikState } from './formikHelper';
import InputLabel from '@material-ui/core/InputLabel';
import 'date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from '@material-ui/pickers';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { useField } from 'formik';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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
    // margin: theme.spacing(1),
    position: 'relative',
  },
}));
const enquiryFormEndpoint = process.env.AUTOMOBILE_APP_ENQUIRY_ENDPOINT;

const EnquiryPage = (props) => {
  //Do we need to write props as a argument

  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    axios
      .post(enquiryFormEndpoint, values, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        setSubmitionCompleted(true);
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validationSchema = Yup.object().shape({
    eventName: Yup.string().required('Required'),
    eventDate: Yup.date().nullable().required('Required'),
    city: Yup.string().required('Required'),
    venue: Yup.string().required('Required'),
    hostedBy: Yup.string().required('Required'),
    // email: Yup.string().email().required('Required'),
  });

  const initialValues = {
    eventName: '',
    eventDate: null,
    city: '',
    venue: '',
    hostedBy: '',
    // email: '',
  };

  return (
    <React.Fragment>
      {!isSubmitionCompleted && (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
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
    form,
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

  const DatePickerField = ({ field, form, ...other }) => {
    const onChange = (date) => {
      form.setFieldTouched(field.name, true, true);
      form.setFieldValue(field.name, date, true);
      console.log(date);
    };
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          inputVariant='outlined'
          label='event date *'
          variant='inline'
          fullWidth
          clearable
          disablePast
          format='MM/dd/yyyy'
          name={field.name}
          value={field.value}
          // if you are using custom validation schema you probably want to pass `true` as third argument
          onChange={(date) => onChange(date)}
          {...other}
        />
      </MuiPickersUtilsProvider>
    );
  };

  const formStyles = useFormStyles();

  return (
    <Container maxWidth='xs'>
      <Typography className={formStyles.title}>Get in touch</Typography>
      <Typography className={formStyles.content}>
        We believe you'll get the best advice by talking to someone who has been
        there. As you fill out the form below, a suggested travel expert will
        appear on the right. This is someone in your local Kuoni store who has
        visited the hostedBy you're interested in. You can contact them directly
        or continue to fill out the form below.
      </Typography>

      <Form onSubmit={handleSubmit}>
        <TextField
          disabled={isSubmitting}
          error={errors.eventName && touched.eventName}
          label='event name *'
          name='eventName'
          className={formStyles.textField}
          value={values.eventName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={errors.eventName && touched.eventName && errors.eventName}
          margin='none'
          variant='outlined'
          fullWidth
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
        </MuiPickersUtilsProvider>

        <TextField
          disabled={isSubmitting}
          error={errors.city && touched.city}
          label='city *'
          name='city'
          className={formStyles.textField}
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={errors.city && touched.city && errors.city}
          margin='none'
          variant='outlined'
          fullWidth
        />
        <TextField
          error={errors.venue && touched.venue}
          label='venue'
          name='venue'
          className={formStyles.textField}
          value={values.venue}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={errors.venue && touched.venue && errors.venue}
          margin='none'
          variant='outlined'
          fullWidth
        />
        <TextField
          error={errors.hostedBy && touched.hostedBy}
          label='hostedBy'
          name='hostedBy'
          className={formStyles.textField}
          value={values.hostedBy}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={errors.hostedBy && touched.hostedBy && errors.hostedBy}
          margin='none'
          variant='outlined'
          fullWidth
        />
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
            {' '}
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
    </Container>
  );
};

export default EnquiryPage;
