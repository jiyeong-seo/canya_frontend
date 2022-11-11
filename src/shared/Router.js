import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import SignInPage from "../pages/join/";
import SignUpPage from "../components/join/SignUpForm";
import Comment from "../pages/test";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/join" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/test" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
