import React from 'react';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Card.css';


export const MovieCard = (props) => {
    const data = props.data;
    const [title, description, url, pictureUrl, averageScore, reviewCount] = [data.title, data.description, data.url, data.pictureUrl, data.averageScore, data.userReviews.length];
    return (
        <CardActionArea to={url} component={Link} style={{ height: '100%', borderRadius: "10px" }}>
            <Card className="card">
                <CardContent style={{ height: "100%" }}>
                    <Grid container alignItems="stretch" style={{ height: "100%" }}>
                        <Grid container spacing="4" alignItems="center">
                            <Grid item>
                                <img width={120} className="poster"
                                src={pictureUrl} alt={"movie poster for " + title} 
                                 />
                            </Grid>
                            <Grid item xs={12} sm>
                                <Typography className="card-title" variant="h6" gutterBottom>
                                    {title}
                                </Typography>
                                <Typography className="card-text">
                                    {(description.length < 250) ? description : description.substring(0, 250) + '...'}
                                </Typography>
                                <Typography className="card-title">
                                    {"Epilepsy Score: " + averageScore}
                                </Typography>
                                <Typography className="card-text">
                                    {"(based on " + reviewCount + " reviews)"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

