import React from 'react';
import './navigation.css';
import { navbarData } from './navbarData';
import styled from 'styled-components';

export type BurgerProps = {
    open: boolean;
    onClick: () => void;
}

const DIV = styled.div`

    background-color: #2F4050;
    height: 100vh;
    width: 250px;
    transform: ${({open}: BurgerProps) => open ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: all 0.25s ease-in-out;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 3.5rem;
` as any; 

const Navigation = ({ open }: BurgerProps): JSX.Element => {
    return (
        
            <DIV open={open}>
                <ul className="navbarList">
                    {navbarData.map((val, key) => {
                        return (
                            <li key={key}
                                className="row"
                                id={window.location.pathname === val.link ? "active" : ""}
                                onClick={() => window.location.pathname = val.link}>
                                <div id="icon">{val.icon}</div>{" "}
                                <div id="title">
                                    {val.title}
                                </div>
                            </li>


                        );
                    })}
                </ul>
            </DIV>
    )
}

export default Navigation;
