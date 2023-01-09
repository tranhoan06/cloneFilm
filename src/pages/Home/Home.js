import Navbar from '../../component/Navbar/Navbar';
import Content from '../../component/content/Content';
import Intro from '../../component/intro/intro';
import Menu from '../../component/Menu/Menu';
import MoviesDetail from '../../component/MoviesDetail/MoviesDetail';
import { useSelector } from 'react-redux';
import SearchMovie from '../../component/Search/SearchMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from '../Search/Search';

const Home = () => {
    const {MovieDetail} = useSelector(state => state.infoMovies) 

    return (
        <>
                {/* <Navbar/> */}
                <Intro/>
                <Content/>
                <Menu/>
                <MoviesDetail movie={MovieDetail}
                    showModal={MovieDetail ? true : false}
                />
                
            {/* <SearchMovie/> */}
        </>

    )
}

export default Home