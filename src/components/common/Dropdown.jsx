import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Dropmenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35px;
    right: 0px;
    width: 65px;
    border: 2px solid #E5EAF2;
    border-radius: 15px;
    padding: 10px 15px;
    padding-right: 50px;
    background-color: white;
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 7px;
        margin: 0;
        padding: 0;
    }
    li {
        cursor: pointer;
    }
    &.active {
        color: #4DBDE5;
    }
`

export default function Dropdown() {
    const navigate = useNavigate();
    return (
        <Dropmenu>
            <ul>
<<<<<<< HEAD
                <li>
                    <Link to = "/modify">정보수정</Link>
                </li>
                <li>
                    <Link to = "/login">로그아웃</Link>
                </li>
=======
                <li onClick={()=>{navigate('/modify')}}>정보수정</li>
                <li onClick={()=>{navigate('/login')}}>로그아웃</li>
>>>>>>> a17d6a0e62ec59c2a4c565866ede5737d403819b
            </ul>
        </Dropmenu>
    );
}

