import styled from 'styled-components'

export const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width:230px;
    
    border-radius: 10px;
    background-color: white;
    margin:0 1.333% 1.333% 0;;
    text-decoration:none;
    flex:1;
    .containerChart{
        display: flex;
        justify-content:center;
        width:100%;
    }

    .totalDeAnalise{
        margin: 10px;
    }
`
export const Image = styled.img`
    margin:40px 0px;
    width:100px;
    height: 100px;
    object-fit: cover;
    cursor:pointer;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    background-color:white;
`
export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    border-top: 3px solid  ${props => props.color};
    padding:10px;
    margin:2px;
    transition: 500ms ease-in-out;
    cursor:pointer;

    color:${props => props.color};

    p{
        font-size: 15px;
    }

    &:hover{
        color:white;
        background-color: ${props => props.color};
    }
`