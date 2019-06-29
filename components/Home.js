import React, { Component } from 'react';
import styled from 'styled-components';

const ColorChoice = styled.img`
    border: 1px solid black;
`;

const ColorsBox = styled.div`
    flex-direction: row;
`;

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
`;

const LogoBox = styled.img`
    border: 1px solid black;
`;

class Home extends Component {
    render() {
        return (
            <HomeContent>
                I am the home component
                <ColorsBox>
                    <ColorChoice src="../static/ia-logo-dot-blue.png" />
                    <ColorChoice src="../static/ia-logo-dot-red.png" />
                    <ColorChoice src="../static/ia-logo-dot-green.png" />
                    <ColorChoice src="../static/ia-logo-dot-black.png" />
                    <ColorChoice src="../static/ia-logo-dot-black.png" />
                </ColorsBox>
                <LogoBox src="../static/ia-logo-back.png" />
            </HomeContent>
        );
    }
}

export default Home;