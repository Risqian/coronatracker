import React, { useState, useEffect } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
  }));

const CountryPicker = ({ handleCountryChange }) => {
    
  const classes = useStyles();

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <div className={styles.container}>
            <Grid container justify='center'>
                <FormControl className={classes.formControl}>
                    <InputLabel>Negara</InputLabel>
                    <Select defaultValue="global" onChange={(e) => handleCountryChange(e.target.value)} >
                        <MenuItem value="global">Global</MenuItem>
                        {fetchedCountries.map((country, i) => <MenuItem key={i} value={country}> {country} </MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
        </div>
    )
}

export default CountryPicker;