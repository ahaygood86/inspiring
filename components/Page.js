import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import firebase from 'firebase/app';

const theme = {
  backgroundColorMain: 'linear-gradient(to bottom right, #3A3A3A, #FFFFFF)',
  backgroundColorAlt: '#FFFFFF', 
  borderColorLogo: '#3A3A3A',
  borderColorMain: 'grey',
  borderColorNavMenu: 'white',
  viewportSizePhoneMax: '360px',
  viewportSizeTabletMin: '361px',
  viewportSizeTabletMax: '1024px',
  viewportSizeDesktopMin: '1025px',
};

const StyledPage = styled.div`
  background-image: ${props => props.theme.backgroundColorMain};
  color: ${props => props.theme.fontColorMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.backgroundColorAlt};
  border: 2px solid ${props => props.theme.borderColorMain};
  border-radius: 10px;
  flex-grow: 1;
  min-width: 80vw;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Kalam', cursive;  
  }
  a {
    text-decoration: none;
    color: ${theme.fontColorLink};
  }
`;

class Page extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDTIlgrsDk6uds_Z12bh-CuzPIN3wHhuww",
      authDomain: "inspiring-apps-demo.firebaseapp.com",
      databaseURL: "https://inspiring-apps-demo.firebaseio.com",
      projectId: "inspiring-apps-demo",
      storageBucket: "",
      messagingSenderId: "895414219804",
      appId: "1:895414219804:web:7c52f64f797001cb"
    };
    firebase.initializeApp(firebaseConfig);
  }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <GlobalStyle />
                    <Meta />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>                
            </ThemeProvider>
        );
    }
}

export default Page;