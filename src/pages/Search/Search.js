import React from "react";
import SearchMovie from "../../component/Search/SearchMovie";
import MoviesDetail from "../../component/MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";

const Search = () => {
    const {MovieDetail} = useSelector(state => state.infoMovies)
    return (
        <>
            <div>
                <SearchMovie/>
                <MoviesDetail showModal={MovieDetail ? true : false} 
                movie={MovieDetail}/>
            </div>
        </>
    )
}

export default Search;