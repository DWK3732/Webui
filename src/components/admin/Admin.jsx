import React from 'react';
import AdminHeaderContainer from '@components/admin/containers/AdminHeaderContainer'
import AdminSearchContainer from '@components/admin/containers/AdminSearchContainer';
import AdminBoardContainer from '@components/admin/containers/AdminBoardContainer';
import Sidebar from '@components/common/Sidebar';






export default function Admin() {
    return (
        <>
            <AdminHeaderContainer></AdminHeaderContainer>
            <Sidebar></Sidebar>
            <AdminSearchContainer></AdminSearchContainer>
            <AdminBoardContainer title="[전체 게시판]"></AdminBoardContainer>
        </>
    );
}

