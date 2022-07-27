import React from "react";
import Container from "../common/Container";
import Splash from '../common/Splash';
import homeUnsplash from '../../assets/homeUnsplash.jpg';

const Home = () => {
    return (
        <Container>
            <Splash image={homeUnsplash} style={{color: "#010101"}}>
            <h1 style={{textShadow: '1px 1px black'}}>Welcome to Class Manager</h1>
            <h2 style={{textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>Schools organized</h2>
            </Splash>
        </Container>

    )
}
export default Home;