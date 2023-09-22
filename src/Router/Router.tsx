import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/pages/HomePage/HomePage";
import UserTable from "../components/pages/UserPage/UserTable";
import UserPage from "../components/pages/UserPage/UserPage";
import BlogPostTable from "../components/pages/BlogPostPage/BlogPostTable";
import BlogPostPage from "../components/pages/BlogPostPage/BlogPostPage";
import AdminPage from "../components/pages/AdminPage/AdminPage";
import UserHomePage from "../components/pages/HomePage/UserHomePage";
import BlogPostPublicPage from "../components/pages/BlogPostPage/BlogPostPublicPage";
import Register from "../components/pages/RegisterPage/RegisterPage";
import BlogPostsPublicPage from "../components/pages/BlogPostPage/BlogPostsPublicPage";

/**
 * Router component renders a route switch with all available pages
 */

const Router = () => {
  //const { checkRole } = useContext(ActiveUserContext);

  /** navigate to different "home"-locations depending on Role the user have */

  return (
    <Routes>
      {/* Alle (default) User haben auf diese Endpunkte zugriff */}
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/blogs"} element={<BlogPostsPublicPage />} />
      <Route path={"/blog/:blogPostId"} element={<BlogPostPublicPage />} />

      {/* Nur eingeloggte User haben auf diese Endpunkte zugriff */}
      <Route
        path={"/home"}
        element={
          <PrivateRoute authorities={[]} element={<UserHomePage />}></PrivateRoute>
        }
      />
      <Route
        path={"/dashboard/:userId"}
        element={
          <PrivateRoute authorities={[]} element={<BlogPostTable />}></PrivateRoute>
        }
      />
      <Route
        path={"/blogadd"}
        element={
          <PrivateRoute authorities={[]} element={<BlogPostPage />}></PrivateRoute>
        }
      />
      <Route
        path={"/blogedit/:userId/:blogPostId"}
        element={
          <PrivateRoute authorities={[]} element={<BlogPostPage />}></PrivateRoute>
        }
      />

      {/* Nur Admins haben auf diese Endpunkte zugriff */}
      <Route
        path={"/admin"}
        element={
          <PrivateRoute authorities={[]} element={<AdminPage />}></PrivateRoute>
        }
      />
      <Route
        path={"/users"}
        element={<PrivateRoute authorities={[]} element={<UserTable />} />}
      />
      <Route
        path="/useredit"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />
      <Route
        path="/useredit/:userId"
        element={
          <PrivateRoute authorities={[]} element={<UserPage />}></PrivateRoute>
        }
      />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
