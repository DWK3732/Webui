import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarUL = styled.ul`
    list-style: none;
    padding-left: 1rem;
    position: absolute;
    top: 25%;
    position: fixed;
    li {
        font-size: 13px;
        margin-bottom: 10px;
    }
`

const SNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    text-decoration: none;
    &.active {
        color: #4DBDE5;
    }
`


export default function Sidebar() {
    const systemname = [
        {name: "공지사항", path: "/admin"},
        {name: "경상북도 지도기반 통계정보시스템", path: "/system"}
    ];
    return (
      <SidebarUL>
        {systemname.map((e, i) => (
          <li key={i}>
            <SNavLink to={e.path}>
              {e.name}
            </SNavLink>
          </li>
        ))}
      </SidebarUL>
    );
}

