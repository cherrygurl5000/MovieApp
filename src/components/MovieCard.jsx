import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

export default function MovieCard({
    movie: { title, vote_average, poster_path, release_date },
    link
}) {
    // Movie title text width
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setTextWidth(ref.current.scrollWidth);
    }, []);

    return (
        <div className="text-center col col-md-4 col-lg-3 my-4">
            <div className="card " style={{ width: '15rem', height: '100%' }}>
                <img
                    src={
                        poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : link
                    }
                    className="card-img-top border-bottom"
                    alt={`${title} Poster`}
                    style={{
                        width: '15rem',
                        height: '15rem',
                        position: 'relative',
                        left: '-2rem',
                        top: '-2rem'
                    }}
                />
                <div className="card-body" style={{ paddingTop: '0' }}>
                    <h2
                        className={`card-title text-center pb-2 ${
                            textWidth > width
                                ? textWidth > width * 2 - 10
                                    ? 'fs-6 text-wrap mb-2 b-1 overflow-visible no-underline'
                                    : 'fs-4 overflow-visible pt-2 mb-2 d-flex justify-content-center'
                                : 'fs-1'
                        }`}
                        ref={ref}
                    >
                        {title}
                    </h2>
                    <div className="card-text text-center">
                        <p>
                            <span className="star">
                                <i className="fa-solid fa-star"></i>
                            </span>{' '}
                            &nbsp;
                            <i className="fa-solid fa-circle"></i> &nbsp;
                            {vote_average ? vote_average.toFixed(1) : 'N/A'}
                        </p>
                        <p>
                            {release_date
                                ? release_date.split('-')[0]
                                : 'Unknown'}
                        </p>
                    </div>
                    <a href="#" className="btn btn-primary mt-2">
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}
