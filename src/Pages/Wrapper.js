import React from 'react'
import "../Styles/Wrapper.css"
import Landing from '../Components/Landing'
import Menu from '../Components/Menu'
import About from '../Components/About'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Pin } from '@mui/icons-material'
import Projects from '../Components/Projects'
const Wrapper = () => {

    gsap.registerPlugin(ScrollTrigger);

    var side = gsap.timeline();

    useGSAP(() => {
        side.to(".wrapper", {
            overflowX: "hidden",
            height: "100vh"
        }, "open")
        side.to(".menu-wrapper", {
            width: "100vw",
            // duration: 2,
            ease: "expo.inOut",
            // stagger: 0.2,
        }, "open");
        side.to(".strips", {
            width: "100vw",
            duration: 1,

            ease: "expo.inOut",
            stagger: 0.1,
        }, "open");
        side.to(".strips p", {
            opacity: 1,
            delay: 0.9,
            // duration: 1
        }, "open")
    });

    side.pause();

    const openSide = () => {
        side.restart();
    };

    const closeSide = () => {
        side.reverse();
    };




    return (
        <div className='wrapper'>
            <Menu close={closeSide} />
            <Landing operation={openSide} />
            <About />
            <Projects />
        </div>
    )
}

export default Wrapper
