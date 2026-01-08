import React from 'react';

export default function HeroImg({ movies, defLink }) {
    const photos = movies.map((movie) => movie.poster_path);
    return (
        <>
            <div className="row justify-content-center mb-4 heroImg">
                <figure className="heroFigs">
                    <img
                        className="img-fluid"
                        src={photos[0] || defLink}
                        alt="Hero Movie 1"
                    />
                </figure>
                <figure className="heroFigs">
                    <img
                        className="img-fluid"
                        src={photos[1] || defLink}
                        alt="Hero Movie 2"
                    />
                </figure>
                <figure className="heroFigs">
                    <img
                        className="img-fluid"
                        src={photos[2] || defLink}
                        alt="Hero Movie 3"
                    />
                </figure>
            </div>
        </>
    );
}
