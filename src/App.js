import React, { Component } from 'react';

//  Import Component
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { Grid, Typography } from '@material-ui/core';

import { fetchData } from './api';

class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData
    })
  }

  handleCountryChange = async (country) => {
    if (country === "global") {
      const fetchedData = await fetchData();
      this.setState({
        data: fetchedData,
        country: ""
      })
    } else {
      const fetchedData = await fetchData(country);
      this.setState({
        data: fetchedData,
        country: country
      })
    }


  }

  render() {
    console.log(this.state.country)

    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Typography variant="h4" component="h6">
          Corona Virus Tracker
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Cards data={data} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid xs={12} md={12}>
              <CountryPicker handleCountryChange={this.handleCountryChange} />
            </Grid>
            <Grid xs={12} md={12}>
              <Chart data={data} country={country} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
