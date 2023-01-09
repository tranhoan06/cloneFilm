import styled from "styled-components";
import styles from "../../assets/styles.css";
import { setMovieDetails } from "../store/action";
import { useDispatch } from "react-redux";
import moment from "moment";

// const showModal =  false;

const MoviesDetail = (props) => {
    const {movie, showModal} = props;
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setMovieDetails(null))
    }
    return (
        <>
            <MoviesDetailModal>
                <div className={`backdrop ${showModal ? 'showBackdrop' : 'hideBackdrop'}`}
                    onClick={handleCloseModal}
                ></div>
                <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`}
                    style={
                        movie ? { 
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
                        backgroundSize: 'cover',
                }:{}
            }>
                    <div className="container">
                        <div className="movieInfo">
                            <h1 className="movieTitle">{movie && (movie.name || movie.title)}</h1>
                            <p className="statistical">
                                <span className="rating">Rating: {movie && movie.vote_average * 10}%</span>
                                <span className="popularity">Popularity: {movie && movie.popularity}</span>
                            </p>
                            <p className="releaseDate">Release Date: {movie && 
                                (moment(movie.release_date).format('DD/MM/YYYY') ||
                                moment(movie.first_air_date).format('DD/MM/YYYY')
                                )}</p>
                            <p className="runTime">Runtime: {movie && (movie.runtime || movie.episode_run_time)}</p>
                            <p className="overview">{movie && movie.overview}</p>
                        </div>
                    </div>
                </div>
            </MoviesDetailModal>
        </>
    )
}

export default MoviesDetail;

const MoviesDetailModal = styled.div`
    
`;