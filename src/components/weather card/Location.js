import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => {

    const Container = styled.div`
    text-align: center;
    `
    const City = styled.h1`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.5rem;`

    const Country = styled.h3`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
    `

    return ( 
        <Container>
        <City>Sydney</City>
        <Country>Au</Country>
        </Container>
     );
}
 
export default Location ;