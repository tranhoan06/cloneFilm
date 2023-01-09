import {AiFillHome, AiFillFire, AiFillStar, AiFillInteraction} from 'react-icons/ai'
import {MdTheaterComedy} from 'react-icons/md';
import {BiGhost} from 'react-icons/bi';
import {GiRomanToga} from 'react-icons/gi';
import {FcDocument} from 'react-icons/fc';
import {RiNetflixFill} from 'react-icons/ri';
import styled from 'styled-components';
import React from 'react';
import styles from '../../assets/styles.css'
import MenuItem from './MenuItem';
const Menu = (props) => {
    return (
        <>
            <MenuPane className='test' >
                <MenuItem name="Netflix Originals" Icon={RiNetflixFill} to='netflix'/>
                <MenuItem name="Trending" Icon={AiFillFire} to='trending'/>
                <MenuItem name="Top rated" Icon={AiFillStar} to='topRated'/>
                <MenuItem name="Actions Movies" Icon={AiFillInteraction} to='action'/>
                <MenuItem name="Come Movies" Icon={MdTheaterComedy} to='comedy'/>
                <MenuItem name="Horror Movies" Icon={BiGhost} to='horror'/>
                <MenuItem name="Romance Movies" Icon={GiRomanToga} to='romance'/>
                <MenuItem name="Documentaries" Icon={FcDocument} to='document'/>
            </MenuPane>
        </>
    )
}

export default Menu;

const MenuPane = styled.div`
    
`;