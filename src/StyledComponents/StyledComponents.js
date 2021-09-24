// General
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    z-index: -999;
    background-color: ${props => props.lightMode ? 'white' : '#333333'};
    height: 1560px;
    @media only screen and (min-height: 1560px) {
        height: 100vh;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    margin-left: 12px;
    margin-top: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (min-width: 550px) {
        flex-direction: row;
    }
    z-index: 999;
`

export const Capability = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    @media only screen and (min-width: 725px) {
        font-size: 1.8rem;
    }
    margin: 0;
    margin-right: 12px;
    cursor: pointer;
    color: ${props => props.capabilities === 1 && props.number === props.capabilities ? 'white' : props.color};
    color: ${props => props.capabilities !== 1 && props.number === props.capabilities ? props.color1 : props.color3}
`

export const SourceButton = styled.div`
    position: absolute;
    padding: 0 6px 0 6px;
    top: 0;
    right: 0;
    margin-right: 84px;
    margin-top: 12px;
    border-radius: 8px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #2196F3;
    z-index: 999;
    :hover {
        background-color: #208de3;
    }
    & > a, a:link, a:visited {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    height: 34px;
    width: 40px;
    margin: 0;
    z-index: 999;
    }
`