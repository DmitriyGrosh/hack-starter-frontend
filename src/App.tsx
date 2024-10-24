import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./pages/login/Login.tsx";
import {Register} from "./pages/register/Register.tsx";

const Root = () => (
  <>
    Root
  </>
)

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
