import React from 'react';
import { Link } from 'react-router-dom';

const ReviewPage = (props) => {
    const data = props.data;
    // to see what data is available or add more, check pages/home/movie-data.js
    // access members in data here:
    const [title, description, url] = [data.title, data.description, data.url];
    return (
        <div>
            {title}
            <div />
            {description}
            <div />
            <Link to={url + "/form"}>
                Make new review
            </Link>
        </div>
    )
};

export default ReviewPage;