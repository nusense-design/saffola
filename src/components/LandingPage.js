import React from 'react'
import MainPage from './MainPage'
import MainSection from './MainSection'
import Navbar from './Navbar'

// import LandingPage from "./components/LandingPage";
// import Button from './common/Button';
// import ButtonImg from './common/ButtonImg';
// import Herotxt from './common/Herotxt';
// import Navbar from "./components/Navbar";


const LandingPage = () => {
    return (
        <div className="landing__container">
            <Navbar />
            {/* <MainSection />     */}
            <MainPage/>
        </div>
    )
}

export default LandingPage
