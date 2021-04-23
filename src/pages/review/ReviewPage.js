import React from 'react';
import { Grid, Button } from '@material-ui/core';
import TheatersIconRounded from '@material-ui/icons/TheatersRounded';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import { ScoreCard } from '../../components/ScoreCard';
import Popup from 'reactjs-popup';
import ReactPlayer from "react-player";
import 'reactjs-popup/dist/index.css';
import './ReviewPage.css';
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
} from "react-share";

import { FacebookIcon, TwitterIcon, EmailIcon } from "react-share";

const ReviewPage = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description, url, averageScore, pictureUrl, timestamps, length, trailer] = [data.title, data.description, data.url, data.averageScore, data.pictureUrl, data.timestamps, data.length, data.trailerUrl];
    const [userReviews, numReviews] = [data.userReviews, data.userReviews.length];

    return (
        <Grid container justify="center" style={{ padding: '3em' }} >
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
                    <h2 className="left-align">Reported Triggering Timestamps:</h2>
                    {timestamps.map((time, key) => (
                        <h3 className="timestamp">{time.start.m}:{time.start.s} - {time.stop.m}:{time.stop.s}</h3>
                    ))}
                </Grid>
                <Grid item xs={3} container direction="column" justify="space-between" alignItems="stretch">
                    <Grid item>
                        <Popup
                            modal
                            trigger={<Button
                                disableElevation
                                className="button"
                                size="large"
                                fullWidth
                                startIcon={<MovieOutlinedIcon />}
                            >Watch Trailer</Button>}
                        >
                            {close => (
                                <div className="modal" >
                                    <h2 className="header"><strong>{title} Trailer</strong></h2>
                                    <div className="aspect-content">
                                        <ReactPlayer className="aspect-player" controls width='100%' height='100%' url={trailer} />
                                    </div>
                                    <div className="actions">
                                        <Button className="button" style={{ maxWidth: '50%' }}
                                            onClick={close}
                                            disableElevation size="large" fullWidth
                                        >
                                            Close Trailer
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </Grid>

                    <Grid item container >
                        <ScoreCard score={averageScore} />
                    </Grid>
                    <Grid item container justify="space-evenly" >
                        <Grid item>
                            <TwitterShareButton
                                title={"Let's watch this movie together: " + title}
                                url={"https://triggertracker.com" + url}>
                                <TwitterIcon size={36} round />
                            </TwitterShareButton>
                        </Grid>

                        <Grid item>
                            <FacebookShareButton
                                url={"https://triggertracker.com" + url}
                                quote={"Let's watch this movie together: " + title}>
                                <FacebookIcon size={36} round />
                            </FacebookShareButton>
                        </Grid>

                        <Grid item>
                            <EmailShareButton
                                subject={"Let's watch this movie together: " + data["title"]}
                                body={
                                    "I found this movie on Trigger Tracker: "
                                    + description
                                }>
                                <EmailIcon size={36} round />
                            </EmailShareButton>
                        </Grid>
                    </Grid>


                    <Grid item>
                        <Button component={Link} to={url + "/form"}
                            disableElevation
                            className="button"
                            size="large"
                            startIcon={<CreateIcon />}
                            fullWidth
                        >
                            Write new review
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item
                xs={12} md={12} lg={10}
                style={{ marginTop: '2em' }}
                justify="center"
            >
                {/* Add list of user reviews here */}
                <Grid item xs={12}>
                    <h1 className="center-align" style={{ marginBottom: '0em' }}>Individual User Reviews ({numReviews})</h1>
                </Grid>
                {userReviews.map((review, key) => (
                    <Grid item container xs={12}
                        className='review'
                        justify="space-between"
                        direction="row"
                        alignItems="stretch"
                        key={key}
                        spacing={6}
                    >
                        <Grid item xs={9}>
                            <h2 className="left-align"><strong>User Name: </strong>{review.name}</h2>
                            <h3><strong>Date of review: </strong>{review.reviewDate}</h3>
                            <h3><strong>Review comment: </strong>{review.reviewText}</h3>
                            <h3><strong>Reported Timestamps: </strong></h3>
                            {review.timestamps.map((time, key) => (
                                <h3 className="timestamp" key={key}>{time.start.m}:{time.start.s} - {time.stop.m}:{time.stop.s}</h3>
                            ))}
                        </Grid>
                        <Grid item xs={3} className="center-align" >
                            <ScoreCard score={review.reviewScore} />
                        </Grid>
                    </Grid>

                ))}

            </Grid>
        </Grid>
    )




};

export default ReviewPage;
