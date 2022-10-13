import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar, Section, Home, LoginModal, RegisterModal} from "./components";
import Naves from './components/Naves';
import "../src/styles/app.css";

export const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<LoginModal />} />
          <Route path="register" element={<RegisterModal />} />
          <Route path="section" element={<Section />} />
          <Route path="naves/:id" element={<Naves />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
};
