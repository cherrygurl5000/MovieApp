import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/js/all.js';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
import Spinner from './components/Spinner';
import HeroImg from './components/HeroImg';
import { useEffect, useState } from 'react';

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
    const API_BASE_URL = 'https://api.themoviedb.org/3';
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const langUsed = `${API_BASE_URL}/configuration/languages`;
            const langResp = await fetch(langUsed, API_OPTIONS);
            if (langResp.ok) {
                const languages = await langResp.json();
                setLanguages(languages.results || []);
                // console.log(languages);
            }
        } catch {
            console.log('Languages not loaded');
        }

        try {
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS);
            // throw new Error('Failing');
            if (!response.ok) throw new Error('Failed to fetch movies');
            const data = await response.json();

            if (data.Response === false) {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }
            setMovieList(data.results || []);
            // console.log(data);
        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // State variables
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <>
            <header>
                <HeroImg movies={movies} defLink={posterLink[0]} />
                <h1>
                    Find <span className="gradient-text">Movies</span> You'll
                    Love Without the Hassle
                </h1>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>
            <section className="allMovies">
                <h2 className="gradient-text">&nbsp;All Movies&nbsp;</h2>
                {isLoading ? (
                    <Spinner />
                ) : errorMessage ? (
                    <p className=".alert-danger">{errorMessage}</p>
                ) : (
                    <div className="row d-flex justify-content-center">
                        {movieList.map((movie) => (
                            <MovieCard
                                movie={movie}
                                key={movie.id}
                                link={posterLink[0]}
                                languages={languages}
                            />
                        ))}
                    </div>
                )}
            </section>
            {/* <h2>Trending List :</h2>
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
            </div> */}
        </>
    );
}

export default App;
