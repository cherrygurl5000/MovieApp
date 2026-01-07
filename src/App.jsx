import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
import Spinner from './components/Spinner';

function App() {
    const posterLink =
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const movie = {
        title: 'Jumanji',
        poster_path: posterLink,
        vote_average: 4.5,
        release_date: '1/6/2026',
        original_language: 'English'
    };
    return (
        <>
            <MovieCard movie={movie} />
            <Search />
            <Spinner />
        </>
    );
}

export default App;
