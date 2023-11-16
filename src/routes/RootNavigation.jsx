import { Route, Routes } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import LoginNavigation from "./LoginNavigation";
import { useToken } from "@hooks/useToken";
import Admin from "@components/admin/Admin";
import System from "@components/system/System";
import Modify from "@components/modify/Modify";

const RootNavigation = () => {
  const { getToken } = useToken();

  return (
    <Routes>
      <Route
        path="*"
        element={getToken("access") ? <MainNavigation /> : <LoginNavigation />}
      />
      <Route path="/" element={<MainNavigation></MainNavigation>}/>
      <Route path="/login" element={<LoginNavigation></LoginNavigation>}/>
      <Route path="/admin" element={<Admin></Admin>}/>
      <Route path="/system" element={<System></System>}/>
      <Route path="/modify" element={<Modify></Modify>}/>
    </Routes>
  );
};

export default RootNavigation;
