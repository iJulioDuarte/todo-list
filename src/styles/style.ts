import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
    margin-top: 2rem;
    text-decoration: underline;
`

export const Home = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const BoxInput = styled.div`
    margin-top: 2rem;
    width:70%;
    height: 5rem;
    background-color: #f1fffa;
    border: 2px solid #00A000;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Input = styled.input`
    background-color: #fff;
    width: 90%;
    height: 60%;
    border: 2px solid #00A000;
    border-radius: 16px;
    color: #000;
    font-size: 17px
`
