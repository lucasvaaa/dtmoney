import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3,1fr); //3 colunas com um tamanho flexível entre todas elas
    gap: 2rem;
    margin-top: -10rem;

    div {
        background-color: var(--shape);

        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);


        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

    strong {
        display: block; //geralmente strong vem com display inline e 'block' faz trabalhar como se fosse uma div, permitindo o margin-top
        margin-top: 1rem;
        font-size:2rem ;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background {
        background-color: var(--green);
        color: #fff;

    }
    }
`;