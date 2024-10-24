import {createBrowserRouter, Navigate, RouterProvider, useNavigate} from "react-router-dom";
import {Login} from "./pages/login/Login.tsx";
import {Register} from "./pages/register/Register.tsx";
import {ComponentType, FC} from "react";
import {Button} from "@mui/material";

const Root = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login")
  }

  return (
    <>
      Root
      <Button onClick={logout}>Logout</Button>
    </>
  )
}

interface IRoute {
  component: ComponentType<any>;
}

const PrivateRoute: FC<IRoute> = ({ component: Component }) => {
  const auth = localStorage.getItem("auth")

  if (auth !== null && JSON.parse(auth)?.isAuth) {
    return <Component />
  }

  return <Navigate to="/login" />;
};


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute component={Root} />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
