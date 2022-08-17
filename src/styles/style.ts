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
export const BoxInput = styled.form`
    margin-top: 2rem;
    width:70%;
    height: 8rem;
    background-color: #f1fffa;
    border: 2px solid #00A000;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Ul = styled.ul`
    list-style: none;
    margin-top:2rem;
    width:80%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem;
`
export const Li = styled.li`
    width: 47%;
    height: 2.3rem;
    font-size: 18px;
    border: 2px solid #00A000;
    border-radius: 16px;
    text-align: initial;
    padding-left: 0.9rem;
    margin-top: 1rem;
    display:flex;
    align-items:center;
    background-color: #F6FAF8;
    color: #000
`

export const Input = styled.input`
    background-color: #F6FAF8;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 90%;
    height: 60%;
    border: 2px solid #00A000;
    border-radius: 16px;
    color: #000;
    font-size: 17px;
`

export const Button = styled.button`
    background-color:#96E6B3;
    width: 7rem;
    height: 3rem;
    margin-bottom:1rem;
    color: #555;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
    &:hover{
        background-color:#87FFA2;
        cursor: pointer;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
    };
    &:active{
        background-color:#54E68A;
        cursor: pointer;
    }

`