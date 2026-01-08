import React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

export default function MovieCard({
    movie: { title, vote_average, poster_path, release_date, original_language }
}) {
    // Movie title text width
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    // Language text width
    const ref2 = useRef(null);
    const [langWidth, setLangWidth] = useState(0);
    const [langTextWidth, setLangTextWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setTextWidth(ref.current.scrollWidth);
        setLangWidth(ref.current.offsetWidth);
        setLangTextWidth(ref.current.scrollWidth);
    }, []);

    return (
        <div className="text-center col col-lg-3 my-4">
            <div className="card " style={{ width: '18rem', height: '100%' }}>
                <img
                    src={poster_path}
                    className="card-img-top border-bottom"
                    alt="{title} Poster"
                    style={{
                        width: '18rem',
                        height: '18rem',
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
                                    ? 'fs-6 text-wrap mb-2 b-1'
                                    : 'fs-4 overflow-visible pt-2 mb-3'
                                : 'fs-1'
                        }`}
                        ref={ref}
                    >
                        {title}
                    </h2>
                    <div className="card-text text-center">
                        <p>{vote_average} Stars</p>
                        <p>Released: {release_date}</p>
                        <p
                            className={
                                langTextWidth > langWidth
                                    ? 'pt-1 pb-2 mb-4 small'
                                    : ''
                            }
                            ref={ref2}
                        >
                            Original Language: {original_language}
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
