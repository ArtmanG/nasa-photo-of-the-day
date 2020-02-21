import React from 'react';
import styled from 'styled-components';

const HexBG = styled.div`
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
background-color: white;
width: 810px;
margin: 0 auto;
`;

const HexImg = styled.img`
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
width: 800px;
margin-top: .5%;
`;

const Image = ({ image }) => {
    return (
        <HexBG>
            <HexImg src={image} alt='NASA' />
        </HexBG>
    ) 
};

export default Image;