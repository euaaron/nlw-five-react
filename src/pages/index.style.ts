import styled from 'styled-components';

export const Container = styled.section`
    flex: 1;
    display: flex;
    overflow-y: scroll;
    gap: 2rem;
    flex-direction: column;

    padding: 2rem 4rem 1rem;

    div {
        display: flex;
        flex-direction: column;
    }


    div:first-of-type {
        gap: 2rem;

        ul {
            list-style: none;
            display: flex;
            gap: 1.5rem;

            li {
                flex: 1;
                display: flex;
                align-items: center;
                background: var(--dark-gradient);
                gap: 1rem;
                
                transition: filter .3s;
                filter: saturate(.6);

                &:hover,
                &:focus {
                    filter: none;
                }

                img {
                    width: 8rem;
                    height: 8rem;
                }

                div:nth-of-type(2) {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    color: var(--brightBlack);

                    a {
                        color: var(--purple);
                        font-family: Lexend, sans-serif;
                        font-weight: 600;
                        line-height: 1.4rem;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    p {
                        font-size: 0.875rem;
                        max-width: 70%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    footer {
                        display: flex;
                        width: 100%;
                        gap: .65rem;

                        span:last-of-type {
                            position: relative;
                            padding-left: 1rem;
                            
                            &::before {
                                content: "";
                                width: 4px;
                                height: 4px;                                
                                border-radius: 2px;
                                background: var(--light-background);
                                position: absolute;
                                left: 0;
                                top: calc(50% - 1px);
                            }
                        }
                    }
                }

                button {
                    background: transparent;
                    border: none;
                    filter: grayscale(1) brightness(1.5);
                    transition: filter .6s;
                    font-size: 0;

                    img {
                        width: 4rem;
                        height: 4rem;
                    }

                    &:hover,
                    &:focus {
                        filter: none;
                    }
                }
            }
        }
    }

    div:last-of-type {
        flex: 1;
        ul {

        }
    }

`;

export default Container;

