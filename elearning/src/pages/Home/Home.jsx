import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Numbercounter from "../../components/Numbercounter/Numbercounter";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer/Footer";
export const Home=()=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Numbercounter/>
            <WhyChooseUs/>
            <Footer/>
        </div>
    )
}
export default Home;