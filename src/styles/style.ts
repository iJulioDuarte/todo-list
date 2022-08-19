import styled from "styled-components";

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

    @media (max-width: 768px){
        width:80%
    }
`