import React from 'react';
import { Grid, Button, TextField, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import CreateIcon from '@material-ui/icons/Create';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import './ReviewForm.css';

const ReviewInput = withStyles({
  // I know everything else uses css, but this input field is too complicated for my understanding of normal css, so I used withStyles
  root: {
    '& label': {
      fontWeight: 700,
      color: '#363636',
    },
    '& label.Mui-focused': {
      color: '#363636',
    },
    '& .MuiOutlinedInput-input': {
      color: '#3c555e',
      '&::placeholder': {
        opacity: '85%',
        color: '#3c555e',
      },
    },
    '& .MuiFormHelperText-root': {
      color: '#363636',
      marginLeft: '2em',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#eaeaea',
      '&.Mui-focused': {
        backgroundColor: '#fafafa',
      },
      '& fieldset': {
        border: '2px solid #3c555e',
      },
      '&:hover fieldset': {
        border: '2px solid #3c555e',
        borderColor: '#3c555e',
      },
      '&.Mui-focused fieldset': {
        border: '3px solid #3c555e',
        borderColor: '#3c555e',
      },
    },
  },
})(TextField);

const ReviewForm = (props) => {
  const data = props.data;
  // to see what data is available or add more, check pages/home/movie-data.js
  // access members in data here:
  const [title, description, url, timestamps, length] = [data.title, data.description, data.url, data.timestamps, data.length];

  const ratingChanged = (newRating) => { console.log(newRating); };

  return (
    <Grid container justify="center" style={{ marginTop: '5em', padding: '3em' }} >
      <Grid container item
        justify="space-around"
        spacing={6}
        xs={12} md={12} lg={10}
        className="summary"
      >
        <Grid item xs >
          <h1>{title}</h1>
          <h3><strong>Description: </strong>{description}</h3>
          <h3><strong>Runtime: </strong>{length.h}h {length.m}m</h3>
          <h2 className="left-align">Reported Triggering Timestamps:</h2>
          {timestamps.map((time, key) => (
            <h3>{time.start.m}:{time.start.s} - {time.stop.m}:{time.stop.s}</h3>
          ))}
        </Grid>
        <Grid item xs={5} container direction="column" justify="flex-start" >
          <Grid item >
            <h2 className="left-align-indent">Epilepsy Score:</h2>
            <div className='stars'>
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
            <h2 className="left-align-indent"> Enter Timestamps </h2>
            <ReviewInput
              id='timestamps-input'
              variant="outlined"
              helperText={'Enter any potentially triggering timestamps'}
              placeholder='Ex: [1:30]-[1:35], [2:05:00]-[2:05:30]'
              multiline
              fullWidth
              InputProps={{
                'aria-label': 'timestamps-input',
                'aria-describedby': "component-helper-text",
                startAdornment: (
                  <InputAdornment position="start">
                    <TimerOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <h2 className="left-align-indent"> Enter Comment </h2>
            <div >
              <ReviewInput
                id='comment-input'
                variant="outlined"
                helperText='Enter any additional comments on this movie'
                placeholder='Ex: My thoughts on the movie are...'
                multiline
                fullWidth
                InputProps={{
                  'aria-label': 'comment-input',
                  'aria-describedby': "component-helper-text",
                  startAdornment: (
                    <InputAdornment position="start">
                      <RateReviewOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
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
