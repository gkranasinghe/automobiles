import React from 'react';
//import { firestore } from '../../app/config/firebase';
import { useFirestore } from 'react-redux-firebase';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
let i = 0;
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SearchPage = () => {
  const firestore = useFirestore();
  i++;
  // console.log('SearchPage -> i', i);

  const [value, setValue] = useState([]);
  const [query, setQuery] = useState({});
  console.log('SearchPage -> query', query);

  //QueryString Array should carry the  Query Strings to be concatenated for  QueryRef
  //Each onClick will push strings to queryString Array
  let queryReff = firestore.collectionGroup('listings');
  let queryRef = firestore
    .collectionGroup('listings')

    .where('city', '==', 'sdas')
    .where('hostedBy', '==', 'sadas');

  Object.entries(query).forEach(([key, value]) => {
    // console.log('SearchPage -> key, value', key, value);
    if (value !== '') queryReff = queryReff.where(key, '==', value);
    // console.log('SearchPage -> queryReff ', queryReff);
  });

  const classes = useStyles();
  //const [state, setstate] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    /**
     * //Will show the unchange state
    // //State change will be visible after the rerendering only // @ console.log('SearchPage -> i', i);
     */
    // console.log('handleChange -> query BEFORE', query);
    setQuery({ ...query, [e.target.name]: e.target.value });
    // // console.log('handleChange -> e.target.value', e.target.value);
    // // console.log('handleChange -> e.target.name', e.target.name);
    // // console.log('handleChange -> query AFTER', query);
    //Will show the unchange state
    // //State change will be visible after the rerendering only // @ console.log('SearchPage -> i', i);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  //DO NOT EVER PUT HOOKS OR ANY STATE CHANGES INSIDE THE QUERY ,HAVING SO WILL CAUSE A INIFINITE LOOP DUE TO COMPONENT RERENDERING AND QUERY REEXECUTIONING
  useEffect(() => {
    queryReff
      .get()
      .then((querySnapshot) => {
        console.log('SearchPage -> querySnapshot', querySnapshot);

        const queryData = [];
        querySnapshot.forEach((doc) => {
        //  console.log(doc.data());
          queryData.push(doc.data());
          // console.log('SearchPage -> queryData.length', queryData.length);
        });
        setValue(queryData);
      })

      .catch((error) => console.log(error));
  }, [query]);

  return (
    <>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ab dolorum
      placeat commodi iste. Itaque, nesciunt labore impedit quasi dicta, facilis
      voluptatem deleniti repellendus facere quidem iure doloremque maxime
      perspiciatis qui reprehenderit rem dignissimos error. Rerum totam
      veritatis a, quasi quis natus asperiores eligendi sequi mollitia molestiae
      minus laborum dignissimos error magni cupiditate esse ex maiores nobis
      beatae hic ullam tempore ad, deserunt ipsam! Laboriosam facilis ad eius.
      Repellendus nesciunt, facilis ipsum animi cum consequatur quod labore
      quaerat voluptates suscipit odit quisquam architecto quibusdam optio
      nostrum, fugit saepe aspernatur! Iste illum ut qui sunt adipisci,
      dignissimos eligendi nobis natus expedita?
      {value.map((item) => (
        <div>{item.city}</div>
      ))}
      <div>
        <Button className={classes.button}>{query.hostedBy}</Button>
        <FormControl className={classes.formControl}>
          <InputLabel id='hostedBy'>hostedBy</InputLabel>
          <Select
            labelId='hostedBy-label'
            id='hostedBy'
            // open={open}
            // onClose={handleClose}
            // onOpen={handleOpen}
            value={query.hostedBy ? query.hostedBy : ''}
            onChange={handleChange}
            name='hostedBy'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'MM'}>MM</MenuItem>
            <MenuItem value={'Gayan'}>Gayan</MenuItem>
            <MenuItem value={'Wayan'}>Wayan</MenuItem>
          </Select>
        </FormControl>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur,
      voluptas voluptate animi laborum pariatur quos omnis distinctio nobis
      quisquam quod perferendis praesentium porro voluptates culpa hic
      architecto quaerat illum dolorum rerum quis aperiam eum! Excepturi ratione
      ipsam veniam magni et quam debitis, animi incidunt quibusdam inventore
      iste dolor laudantium, rerum illum! Commodi libero beatae earum natus
      officiis. Sit iusto quibusdam odio dolor illo exercitationem perferendis
      unde! Ad deserunt eos suscipit mollitia beatae ratione eligendi esse
      saepe, possimus veritatis autem. Sequi accusantium ab laboriosam, optio at
      expedita iure alias fugit repellendus placeat sapiente porro animi a vero
      eaque facilis rem.
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          {query.city}
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id='city-label'>City</InputLabel>
          <Select
            labelId='city-label'
            id='city'
            //open={open}
            // onClose={handleClose}
            // onOpen={handleOpen}
            value={query.city ? query.city : ''}
            onChange={handleChange}
            name='city'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Colombo'}>Colombo</MenuItem>
            <MenuItem value={'Boralesgamuwa'}>Boralesgamuwa</MenuItem>
            <MenuItem value={'Nugegoda'}>Nugegoda</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default SearchPage;
