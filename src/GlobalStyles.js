import {createGlobalStyle} from 'styled-components';


const GolbalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'); */
:root {
    --light-orange: #FFA777;
    --contrast-orange: #D25B1A
    --font-black:##020101;
    ::selection {
    background-color: rgb(231, 105, 67);
    color:white;
}
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Quicksand';

 }

html {
    font-size: 62.5%;

}

a {
    text-decoration: none;
    color: inherit;
}

`

export default GolbalStyles;