import React from 'react';
import styled from 'styled-components';

const NewH1 = styled.h1`
color: white;
margin: 0 0 5%;
padding-top: 3%;
`;

const Title = ({ title }) => {
    return (
        <div>
            <NewH1>{title}</NewH1>
        </div>
    )
}

export default Title;