import React from 'react';
import { Grid } from '@material-ui/core';
import ReactStars from "react-rating-stars-component";
import './Card.css';


export const ScoreCard = (props) => {
    const score = props.score;
    return (
        <Grid item xs={12} className="center-align" >
            <div className="score-card">
                <h2 className="center-align" >Epilepsy Score:</h2>
                <div className="stars-section">
                    <ReactStars
                        count={5}
                        value={score}
                        edit={false}
                        size={36}
                        isHalf={true}
                        char={"★"}
                        emptyIcon={<i className='far fa-star'></i>}
                        halfIcon={<i className='fa fa-star-half-alt'></i>}
                        fullIcon={<i className='fa fa-star'></i>}
                        color='#363636'
                        activeColor='#ffff00'
                    />
                </div>
                <h1>({score}/5)</h1>
            </div>
        </Grid >
    );

};