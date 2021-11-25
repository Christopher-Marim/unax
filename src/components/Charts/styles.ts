import styled  from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: baseline;
    border-radius:10px;
    padding:20px;
    align-items: flex-start;
    background-color: white;
    width:50%;
    height: 400px;
`

export const NavBar = styled.div`
    display: flex;
    justify-content: baseline;
    padding:5px;
    align-items: center;
    background-color: white;
    width:100%;
    border-bottom: 1px solid #dbdbdb;
`
export const Nav = styled.button`
    border-style:none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 500;
    padding:5px 10px;
    font-size: 1.1em;
    color:#999999;
    cursor:pointer;
`