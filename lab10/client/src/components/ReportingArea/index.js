import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    color: white;
    text-align: center;
    background: rgb(37, 150, 190);
    background-width: 100px;
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