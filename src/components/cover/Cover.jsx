import React from 'react'
import coverBackground from '../../media/coverBackground.mp4'
import "./cover.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";



const Cover = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web", "FrontEnd", "ReactJS", "BackEnd"],
        });
    }, []);

    return (
        <div className="cover-container" id="cover">
            <video src={coverBackground} className="video" autoPlay muted loop />
            <div className="container">
                <h2 className="description">Bienvenidos, soy</h2>
                <h1 className="title">Juan Carlos Castillo</h1>
                <h3 className="span">
                    Desarrollador <span style={{color:"#e76142"}} ref={textRef}></span>
                </h3>
            </div>
        </div>
    )
}

export default Cover
