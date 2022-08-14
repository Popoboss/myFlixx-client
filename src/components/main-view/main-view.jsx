import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {
                    _id: '1',
                    Title: 'Inception',
                    Description: 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter the dreams of people and play with their subcoscious ',
                    Director: {
                        Name: 'Christopher Nolan',
                    },
                    Genre: {
                        Name: 'Action',
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
                },
                {
                    _id: '2',
                    Title: 'The Shawshank Redemption',
                    Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
                    Director: {
                        Name: 'Frank Darabont',
                    },
                    Genre: {
                        Name: 'Drama',
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
                },
                {
                    _id: '3',
                    Title: 'Gladiator',
                    Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
                    Director: {
                        Name: 'Ridley Scott',
                    },
                    Genre: {
                        Name: 'Action',
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png',
                    Featured: false
                },
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />;

        if (movies.length === 0) return <div className='main-view'>The list is empty!</div>;

        return (
            <div className='main-view'>
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setState({ selectedMovie: newSelectedMovie }); }} />)}
            </div>
        );
    }
}