import React from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc"
import styled from "styled-components";

const Intro = (props) => {
    const [isMuted, setIsMuted] = React.useState(false)

    return (
        <>
            <Introcontainer>
                <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/273686020"
                className="videoIntro"
                />
                <div className="infoIntro">
                    <h1 className="headingIntro">NETFLIX The Rain</h1>
                    <p className="overviewIntro">Trailer for Netflix series "The Rain" <br/>

                        Production: Fox Devil Films GmbH for Netflix Amsterdam <br/>
                        Director: Simon Ritzler <br/>
                        Dop: Carlo Jelavic <br/>
                        Editor: Michael Timmers <br/>
                        Colorist: Mike Bothe<br/> 
                        Compositing: Stathis Nafpliotis <br/>
                    </p>
                </div>
                {
                    isMuted ? (
                        <VscMute className="btnVolume"
                            onClick={() => setIsMuted(prev => !prev)}
                        />

                    ) : (
                        <VscUnmute className="btnVolume"
                            onClick={() => setIsMuted(prev => !prev)}
                        />
                    )
                }
                <div className="faceBottom"></div>
            </Introcontainer>
        </>
    )
}

export default Intro;

const Introcontainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 60%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 140px;
        left: 30px;

        @media screen and (max-width:800px) {
            top: 120px;
            left: 25px;
        }

        @media screen and (max-width:600px) {
            top: 100px;
            left: 15px;
        }

        .headingIntro {
            font-size: 60px;
            color: var(--color-white);
            transition: all 0.3s ease;
            user-select: none;

            @media screen and (max-width: 800px) {
                font-size: 40px;
            }
            
            @media screen and (max-width: 600px) {
                font-size: 24px;
            }
        }

        .overviewIntro {
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 20px;
            color: var(--color-white);

            @media screen and (max-width: 800px) {
                font-size: 16px;
            }
            
            @media screen and (max-width: 600px) {
                font-size: 14px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        height: 40px;
        width: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3s ease;
        transfom: scale(1);

        &:hover {
            color: #fff;
            transfom: scale(1.4);
            background-color: rgba(211, 211, 211, 0.2)
        }

        @media screen and (max-width: 800px) {
            height: 30px;
            width: 30px;
            padding: 4px;
        }
        
        @media screen and (max-width: 600px) {
            height: 20px;
            width: 20px;
            padding: 1px;
        }
    }
    .faceBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(100deg, transparent, rgba(15, 15, 15, 0.6) 40%, rgb(17,17,17), rgb(17,17,17);
    }
`;