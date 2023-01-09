import { useDispatch, useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import { useEffect } from "react";
import * as ACTIONS from "../store/action";
import {FaArrowAltCircleUp} from 'react-icons/fa';
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY  } from "../hook";

const Content = (props) => {
    const [scrollY] = useScrollY();
    const dispatch = useDispatch();
    const { NetflixOrginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries
    } = useSelector(state => state.infoMovies)

    useEffect(() => {
        dispatch(ACTIONS.getNetflixOrginals());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getTopRatedMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getRomanceMovies());
        dispatch(ACTIONS.getDocumentaries());
        
    }, [dispatch]);

    const ScrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <div>
            <MoviesRow movies={NetflixOrginals} title={'Netflix Originals'} isNetflix={true} idSection ='netflix'/>
            <MoviesRow movies={TrendingMovies} title={'Trending Movies'} idSection ='trending'/>
            <MoviesRow movies={TopRatedMovies} title={'Top Rated Movies'} idSection ='topRated'/>
            <MoviesRow movies={ActionMovies} title={'Action Movies'} idSection ='action'/>
            <MoviesRow movies={ComedyMovies} title={'Comedy Movies'} idSection ='comedy'/>
            <MoviesRow movies={HorrorMovies} title={'Horror Movies'} idSection ='horror'/>
            <MoviesRow movies={RomanceMovies} title={'Romance Movies'} idSection ='romance'/>
            <MoviesRow movies={Documentaries} title={'Documentaries'} idSection ='document'/>
            <GoToTop onClick={() => ScrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
                }}
            >
                <FaArrowAltCircleUp/>
            </GoToTop>
            </div>
        </>
    )
}

export default Content;

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255, 255, 255,0.4);
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        color: #EB455F;
    }

    @media screen and (max-width: 600px) {
        right: 40px;
    }
`;