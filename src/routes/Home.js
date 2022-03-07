import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

  moviesUrl = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating';
  detailUrl = 'http://';

  state = {
    isLoading: true,
    moives: [],
  };

  getMovies = async() => {
    // console.log(this.moviesUrl);
    const {
      data: {
        data: {movies},
      },
    } = await axios.get(this.moviesUrl);
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
          {isLoading ? (
            <div className="loader">
                <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                  <Movie 
                          key={movie.id}
                          id={movie.id}
                          year={movie.year}
                          title={movie.title}
                          summary={movie.summary}
                          poster={movie.medium_cover_image}
                          genres={movie.genres}
                />
              ))}

            </div>
          )}
      </section>
    );
  };
}

export default Home;
