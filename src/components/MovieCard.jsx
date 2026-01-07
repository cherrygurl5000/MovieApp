import React from 'react';

export default function MovieCard({
    movie: { title, vote_average, poster_path, release_date, original_language }
}) {
    return (
        <div className="d-flex flex-row justify-content-center">
            <div className="card " style={{ width: '18rem' }}>
                <img
                    src={poster_path}
                    className="card-img-top border-bottom"
                    alt="{title} Poster"
                    style={{
                        width: '18rem',
                        position: 'relative',
                        left: '-2rem',
                        top: '-2rem'
                    }}
                />

                <div className="card-body" style={{ paddingTop: '0' }}>
                    <h2 className="card-title text-center">{title}</h2>
                    <p className="card-text text-center">
                        <p>{vote_average} Stars</p>
                        <p>Released: {release_date}</p>
                        <p>Original Language: {original_language}</p>
                    </p>
                    <a href="#" className="btn btn-primary mt-2">
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
}
