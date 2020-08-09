import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'; //Movie 컴포넌트를 임포트
import './Home.css'


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],  
  };
  getMovies = async () => {
    const{
      data: { //data->
        data: {movies},  //data->movies
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false}); //setState({movies:movies})를 축약
  };
  
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (<section className="container"> 
    {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>)
     : (
     <div className="movies"> 
      {movies.map((movie) => ( //movie 컴포넌트 감싸기
       <Movie 
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
       />
       //Movie 컴포넌트 출력
     ))}
    </div>
     )}
     </section>
    );
  }
}

export default Home;