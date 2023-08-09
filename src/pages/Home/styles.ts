import { styled } from "styled-components";

export const Container = styled.div`

    position:absolute; 
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 50rem;

    max-width: 50rem;

    display: grid;
    grid-template-rows: 1fr 3fr 3rem;
    grid-template-areas: 
    "firstSection"
    "taskList"
    "secondSection";

    gap: 1rem;

    padding: 1rem;


    border: 1px solid black;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 1rem;

        width: 100%;

        grid-area: firstSection;

        input {
            width: 50%;
            height: 3rem;

            padding: .5rem;

            font-size: 1.2rem;
        }

        button {
            width: 50%;
            height: 2rem;

            font-size: 1.2rem;
        }
    }

    ul {
        grid-area: taskList;

        overflow-y: auto;
        padding: 2vw;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            width: 100%;

            text-align: center;

            color: grey;
            opacity: .5;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;

            border-bottom-width: .3px;
            border-bottom-color: grey;
            border-bottom-style: solid;

            font-size: 1.2rem;

            button {
                font-size: 2rem;

                border: transparent;
                background-color: transparent;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    > button {
        width: 50%;
        height: 3rem;

        justify-self: center;
        font-size: 1.2rem;
    }

`