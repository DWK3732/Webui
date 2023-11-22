import AdminHeaderContainer from '@components/admin/containers/AdminHeaderContainer'
import SystemTabMenuContainer from './containers/SystemTabMenuContainer';
import Sidebar from '@components/common/Sidebar';

const System = () => {
    return (
      <>
        <AdminHeaderContainer></AdminHeaderContainer>
        <Sidebar></Sidebar>
        <SystemTabMenuContainer></SystemTabMenuContainer>
      </>
    );
  };
  
  export default System;