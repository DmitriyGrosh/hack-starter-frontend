import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Login} from "./pages/login/Login.tsx";
import {Register} from "./pages/register/Register.tsx";
import {ComponentType, FC} from "react";

const Root = () => (
  <>
    Root
  </>
)

interface IRoute {
  component: ComponentType<any>;
}

const PrivateRoute: FC<IRoute> = ({ component: Component }) => {
  const auth = JSON.stringify(localStorage.getItem("auth"))

  if (auth?.isAuth) {
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
