import React from 'react';
import styled from 'styled-components';

const NewP = styled.p`
color: white;
margin: 5% 5%;
`;

const Explanation = ({ explanation }) => {
    return (
        <NewP>{explanation}</NewP> 
    )
}

export default Explanation;