import React from 'react';
import styled from 'styled-components';

//changes the color of text and the background
const Title = styled.h2`
    color: #cedcec;
    text-align: center;
    background-color: #2e75a3;
    padding: 10px;
    `;

class ReportingArea extends React.Component {
    render() {
        return(
            <Title>
                <h2>Reporting</h2>
                <div id="reportingArea"></div>
            </Title>
        );
    }
}

export default ReportingArea;