import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import CreateIcon from '@material-ui/icons/Create';
import './ReviewForm.css';

const ReviewForm = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description, url] = [data.title, data.description, data.url];

    const ratingChanged = (newRating) => {console.log(newRating);};

    return (
          <Grid container justify="center" style={{ marginTop: '5em', padding: '3em'  }} >
              <Grid container item
                  justify="space-around"
                  spacing={6}
                  xs={12} md={12} lg={10}
                  className="summary"
              >
                  <Grid item xs >
                      <h1>{title}</h1>
                      <h3><strong>Description: </strong>{description}</h3>
                  </Grid>
                  <Grid item xs={3} container direction="column" justify="space-evenly">
                      <Grid item>
                          <h3> Rate Movie: </h3>
                      </Grid>
                      <Grid item>
                        <div style={{display: "inline-block"}}>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={36}
                            isHalf={true}
                            char={"★"}
                            emptyIcon={<i className='far fa-star'></i>}
                            halfIcon={<i className='fa fa-star-half-alt'></i>}
                            fullIcon={<i className='fa fa-star'></i>}
                            color='#527480'
                            activeColor='#fafafa'
                            activeColor='#ffff00'
                            />
                        </div>
                      </Grid>
                      <Grid item>
                          <h3> Rate Photosensitivity: </h3>
                      </Grid>
                      <Grid item>
                        <div style={{display: "inline-block"}}>
                          <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={36}
                            isHalf={true}
                            char={"★"}
                            emptyIcon={<i className='far fa-star'></i>}
                            halfIcon={<i className='fa fa-star-half-alt'></i>}
                            fullIcon={<i className='fa fa-star'></i>}
                            color='#527480'
                            activeColor='#ffff00'
                            />
                        </div>
                      </Grid>
                      <Grid item>
                          <h3> Enter Timestamps </h3>
                      </Grid>
                      <Grid item>
                        <textarea rows="1" cols="30">
                          Example: [1:30]
                        </textarea>
                      </Grid>
                      <Grid item>
                          <h3> Enter Comment </h3>
                      </Grid>
                      <Grid item>
                        <textarea rows="5" cols="30">
                          Comment...
                        </textarea>
                      </Grid>
                      <Button component={Link} to={url}
                          disableElevation
                          className="button"
                          size="large"
                          startIcon={<CreateIcon />}
                      >
                          Submit Review
                      </Button>
                  </Grid>
              </Grid>
          </Grid>
    )
};

export default ReviewForm;
