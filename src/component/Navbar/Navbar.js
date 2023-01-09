import styled from 'styled-components';
import NetflixLogo from '../../assets/images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai'
import React, { useEffect, useState } from 'react';
import { useScrollY } from '../hook';
import Home from '../../pages/Home/Home';
import { useNavigate } from 'react-router';

const Navbar = (props) => {
    const [scrollY] = useScrollY();
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();
    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
        (keywords.length > 0) ?
            navigate(`/Search?keywords=${keywords.trim()}`)
        : navigate('/');
    }

    const goGome = () => {
        navigate('/');
        setKeywords('');
    }

    return (
        <>
            <Navigation style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'}}>
                <div className='navContainer'>
                    <div className='logo' onClick={goGome}>
                            <img src={NetflixLogo}/>
                    </div>

                        <div className='navSearch'>
                            <AiOutlineSearch className='iconSearch'/>
                            <input type="text" placeholder='Tìm kiếm'
                            onChange={handleChangeInput}
                            value={keywords}
                            />
                        </div>
                </div>
            </Navigation>

        </>
    )
}

export default Navbar;


const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 1;

    @media only screen and (max-width: 600px) {
        height: 100px;
    }

    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: start;
        height: 100%;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        } 

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%
            }    
        }

        .login {
            font-size: 16px;
            color: var(--color-white);
            margin-right: 20px;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        .navSearch {
            color: white;
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;

            &:hover .iconSearch {
                color: var(--color-white);
            }

            .iconSearch {
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb;
            }

            input {
                font-size: 14px;
                border: 1px solid #fff;
                color: var(--color-white);
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background: var(--color-background);
                transition: width 0.5s;

                &:focus {
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }

            }
        }
    }
`;