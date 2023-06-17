import { Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/Home";
import ResetPass from "../pages/resetpass";
import HomeProfile from "../pages/HomeProfile";
import ProtectedPage from "./protectedPage";
const routes = [
  <Route
    path="/login"
    element={
      <ProtectedPage guestOnly={true}>
        {" "}
        <Login />
      </ProtectedPage>
    }
  ></Route>,
  <Route
    path="/register"
    element={
      <ProtectedPage guestOnly={true}>
        <Register />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/home"
    element={
      <ProtectedPage needLogin={true}>
        <Home />
      </ProtectedPage>
    }
  ></Route>,
  <Route
    path="/profile"
    element={
      <ProtectedPage needLogin={true}>
        <HomeProfile />
      </ProtectedPage>
    }
  ></Route>,

  <Route
    path="/*"
    element={<ProtectedPage needLogin={true} guestOnly={true}></ProtectedPage>}
  />,
];
export default routes;
