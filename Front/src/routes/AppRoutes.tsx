import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Headers from "../components/Headers/Headers";
import Footer from "../components/Footer/Footer";
import Articles from "../components/Articles/Articles";
import Article from "../pages/Article/Article";
import Tasks from "../pages/Tasks/Tasks";
import Task from "../pages/Task/Task";
import Test from "../pages/Test/Test";
import Diary from "../pages/Diary/Diary";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<Article />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="tasks/:id" element={<Task />} />
        <Route path="tasks/test/:id" element={<Test />} />
        <Route path="diary" element={<Diary />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
