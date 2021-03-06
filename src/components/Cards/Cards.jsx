import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'

import cx from 'classnames'
import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return 'loading...'
  }

  const date = new Date(lastUpdate)
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][date.getMonth()]
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][date.getDay()]
  const formatTanggal = days + ", " + date.getDate() + " " + months + " " + date.getFullYear()
  console.log(formatTanggal)

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center' className={styles.cardPrimary}>
        <Grid item component={Card} xs={12} sm={12} md={12} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom> Terinfeksi </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2} separator=',' />
            </Typography>
            <Typography color='textSecondary'> {formatTanggal} </Typography>
            <Typography variant='body2'> Kasus Aktif </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} sm={12} md={12} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom> Sembuh </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2} separator=',' />
            </Typography>
            <Typography color='textSecondary'> {formatTanggal} </Typography>
            <Typography variant='body2'> Jumlah Kesembuhan </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} sm={12} md={12} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom> Meninggal Dunia </Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2} separator=',' />
            </Typography>
            <Typography color='textSecondary'> {formatTanggal} </Typography>
            <Typography variant='body2'> Kasus Meninggal Dunia </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
