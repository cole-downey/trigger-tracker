import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { MovieCard } from '../../components/Card';

const SearchField = withStyles({
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
            color: '#363636',
            '&::placeholder': {
              opacity: '85%',
            },
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '2px solid #527480',
                fontWeight: 700,
            },
            '&:hover fieldset': {
                border: '2px solid #527480',
                borderColor: '#527480',
            },
            '&.Mui-focused fieldset': {
                border: '3px solid #527480',
                borderColor: '#527480',
            },
        },
    },
})(TextField);

const Home = (props) => {
    const data = props.data;
    return (
        <Grid container justify="center">
            <Grid container
                justify="center"
                spacing={6}
                xs={12} md={12} lg={11}
            >
                <Grid item container xs={10} justify="center" >
                    <SearchField
                        label="Search"
                        fullWidth
                        placeholder="Search for a movie here..."
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item container
                    spacing={6}
                    justify="flex-start"
                    alignItems="stretch"
                    xs={12}
                >
                    {data.map((movie, key) => (
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            < MovieCard data={movie} key={key} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Home;