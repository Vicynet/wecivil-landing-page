import {createGlobalStyle} from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
*, body {
    box-sizing : border-box;
    margin : 0;
    padding : 0;
    font-family : 'IBM Plex Sans', san-serif;
    body {
        background-color: '#0062FF' !important;
    }

    body::-webkit-scrollbar {
        width: 0.5em;
      }
      
      body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
      }
      
      body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
        border-radius: 1em;
      }
      .navbar-brand {
        font-family : 'Budget 2012', IBM Plex Sans;
      }
}
`;

export default GlobalStyle;