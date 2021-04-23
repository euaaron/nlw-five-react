import styled from 'styled-components';

export const Container = styled.section`
    flex: 1;
    display: flex;
    overflow-y: scroll;
    gap: 2rem;
    flex-direction: column;

    padding: 2rem 4rem 2rem;

    &::-webkit-scrollbar {
        background-color: var(--light-background);
        width: .8rem;
    }

    &::-webkit-scrollbar-track  {
        background-color: var(--light-background);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--black);
        border-radius: 1rem;
        border-radius: 1rem;
        border: 3px solid var(--light-background);
    }

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
        padding-bottom: 1rem;
        gap: 1rem;

        th, td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--black);
        }

        th {
            text-transform: uppercase;
            font: 500 0.75rem Lexend, sans-serif;
            text-align: left;
        }

        td:nth-child(4),
        td:nth-child(1) {
            min-width: 8rem;
        }

        td {
            font-size: 0.875rem;

            img {
                width: 5rem;
                height: 2.5rem;
            }

            a {
                color: var(--cyan);
                font-family: Lexend, sans-serif;
                font-weight: 600;
                line-height: 1.4rem;
                font-size: 1rem;

                &:hover,
                &:focus {
                    text-decoration: underline;
                }
            }

            button {
                background: transparent;
                border: none;
                font-size: 0;
                    
                border-radius: .6rem;
                padding: .6rem;
                    
                filter: grayscale(1) brightness(1.5);
                transition: filter .6s;

                img {
                    width: 2.5rem;
                    height: 2.5rem;
                }

                &:hover,
                &:focus {
                    filter: none;
                    background: var(--light-background);
                }
            }
        }
        
    }
`;

export const Footer = styled.footer`
    font-family: Lexend, sans-serif;
    color: var(--light-background);

    p {
        line-height: 1.6rem;
        a {
            font-weight: 600;
            transition: .6s;
            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }
    }    

    p:first-of-type {
        a:first-of-type {
            &:hover,
            &:focus {
                color: var(--cyan);
            }
        }

        a:last-of-type {
            &:hover,
            &:focus {
                color: var(--green);
            }
        }
    }

    p:last-of-type {
        a:last-of-type {
            &:hover,
            &:focus {
                color: var(--purple);
            }
        }     
    }
`;
