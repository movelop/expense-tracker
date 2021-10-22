import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Grid, Divider, Typography } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';

import { Form, List, InfoCard } from '..';
import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)
    return (
        <Card className = {classes.root}>
            <CardHeader align = 'center' title = 'Expense Tracker' subheader = 'Powered by Speechly' />
            <CardContent >
                <Typography align = 'center' variant = 'h5' >Total Balance ${balance} </Typography>
                <Typography align = 'center' variant = 'subtitle1' style = {{ lineHeight: '1.5rem', marginTop: '20px' }} >
                    <InfoCard />   
                </Typography>
                <Divider className = {classes.divider} />
                <Form />
            </CardContent>
            <CardContent>
                <Grid container spacing = {2}>
                    <Grid item xs = {12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
