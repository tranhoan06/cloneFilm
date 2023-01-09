import React, { useEffect } from "react";
import styled from "styled-components";
import { useViewPort } from "../hook";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchMovie, setMovieDetails } from "../store/action";

const moviesList = [
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
    "https://i.pinimg.com/564x/4a/93/d0/4a93d0d7dd3cba0fcdce5ca9a4cfb9f1.jpg",
];

const useQuerry = () => new URLSearchParams(useLocation().search);

const SearchMovie = () => {
    const [windowWidth] = useViewPort();
    const dispacth = useDispatch();
    const {SearchMovies} = useSelector(state => state.infoMovies);
    const keywords = useQuerry().get('keywords');

    useEffect(() => {
        if (keywords) dispacth(getSearchMovie(keywords))
    }, [keywords, dispacth]);

    return (
        <>
        <SearchPane className="SearchPane">
            {
                SearchMovies && SearchMovies.length > 0 ? (
                    <div className="searchContent"
                        style={{
                            gridTemplateColumns: `repeat(${
                                windowWidth > 1200 ? 5:
                                windowWidth > 992 ? 4:
                                windowWidth > 768 ? 3:
                                windowWidth > 600 ? 2: 1
                            }, auto)`
                        }}
                    >
                        {
                            SearchMovies.map((movie, index) => {
                                if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                                    const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                                    return (
                                        (
                                            <div className="movieItem" 
                                            onClick={() => dispacth(setMovieDetails(movie))} 
                                            key={index}>
                                                <img src={imgUrl} alt={movie.name || movie.title}/>
                                                <span>{movie.name || movie.title}</span>
                                            </div>
                                        )
                                    )
                                }
                            })
                        }
                    </div>
                ) : (
                    <NotFound>
                        <h1>Khong the tim thay tu khoa {keywords}</h1>
                    </NotFound>   
                )
            }
        </SearchPane>
        </>
    )
}

export default SearchMovie;

const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: var(--color-background);
    transition: all 0.3s linear;

    .searchContent {
        padding: 40px 60px;
        display: grid;
        gap: 8px;

        &:hover .movieItem{
            opacity: 0.7;
        }

        .movieItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
            }

            span {
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                text-align: center;
                padding: 4px;
                background: rgba(0, 0, 0, 0.5);
                color: var(--color-white);
                font-weight: bold;
            }
        }
    }
`;

const NotFound = styled.div`
    padding: 5rem 8rem;
    color: var(--color-white);
`;