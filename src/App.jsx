import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/js/all.js';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
import Spinner from './components/Spinner';
import HeroImg from './components/HeroImg';
import { useState } from 'react';

function App() {
    const posterLink = [
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWV8ZW58MHx8MHx8fDA%3D'
    ];
    const movies = [
        {
            title: 'Jumanji',
            poster_path: posterLink[0],
            vote_average: 4.5,
            release_date: '1/6/2026',
            original_language: 'English'
        },
        {
            title: 'Mars Needs Moms',
            poster_path: posterLink[1],
            vote_average: 4.3,
            release_date: '1/7/2025',
            original_language: 'Spanish'
        },
        {
            title: 'Lion King',
            poster_path: posterLink[2],
            vote_average: 4.8,
            release_date: '2/16/2024',
            original_language: 'French'
        },
        {
            title: 'Lion King : The Musical Number',
            poster_path: posterLink[2],
            vote_average: 4.8,
            release_date: '2/16/2024',
            original_language: 'French'
        }
    ];
    const tester = [];

    // State variables
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <header>
                <HeroImg movies={movies} defLink={posterLink[0]} />
                <h1>
                    Find <span className="gradient-text">Movies</span> You'll
                    Love Without the Hassle
                </h1>
            </header>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h2>Trending List :</h2>
            <div className="row d-flex justify-content-center">
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </div>

            <h2>Popular: </h2>
            <div className="row">
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </div>

            <div className="row">
                <div className="col-2 text-truncate">
                    This text is quite long, and will be truncated once
                    displayed.
                </div>
            </div>

            <span
                className="d-inline-block text-truncate"
                style={{ maxWidth: '150px' }}
            >
                This text is quite long, and will be truncated once displayed.
            </span>

            <Spinner />
        </>
    );
}

export default App;
