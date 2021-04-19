import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import './ReviewPage.css';

const ReviewPage = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description, url, averageScore, pictureUrl, timestamps, length] = [data.title, data.description, data.url, data.averageScore, data.pictureUrl, data.timestamps, data.length];
    return (
        <Grid container justify="center" style={{ marginTop: '5em' }} >
            <Grid container item
                justify="space-around"
                spacing={6}
                xs={12} md={12} lg={10}
                className="summary"
            >
                <Grid item >
                    <img src={pictureUrl} alt={"movie poster for " + title} height="440" className="poster" />
                </Grid>
                <Grid item xs >
                    <h1>{title}</h1>
                    <h3><strong>Description: </strong>{description}</h3>
                    <h3><strong>Runtime: </strong>{length.h}h {length.m}m</h3>
                    <h2 className="left-align"> Reported Triggering Timestamps:</h2>
                    {timestamps.map((time, key) => (
                        <h3>{time.start.m}:{time.start.s} - {time.stop.m}:{time.stop.s}</h3>
                    ))}
                </Grid>
                <Grid item xs={3} container direction="column" justify="space-evenly">
                    <Grid item>
                        <h2>Photosensitivity Review:</h2>
                        <h1> {averageScore}/5</h1>
                    </Grid>
                    <Grid item></Grid>
                    <Button component={Link} to={url + "/form"}
                        disableElevation
                        className="button"
                        size="large"
                        startIcon={<CreateIcon />}
                    >
                        Write new review
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )




};

export default ReviewPage;