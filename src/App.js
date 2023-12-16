import {useRoutes} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Layout from "./Layout";
import Profile from "./pages/Profile";

export const generateFakeData = (count) => {
  const fakeData = [];

  for (let i = 0; i < count; i++) {
    const fakeItem = {
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for Item ${i + 1}`,
      // Другие поля по вашему выбору
    };

    fakeData.push(fakeItem);
  }

  return fakeData;
};

function App() {
  const routes = useRoutes([
    {
      path: '/auth/login',
      element: <Login/>
    },
    {
      path: '/auth/register',
      element: <Register/>
    },
    {
      path: '/auth/reset',
      element: <Reset/>
    },
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '',
          element: 'home'
        },
        {
          path: 'search',
          element: 'search'
        },
        {
          path: 'explore',
          element: 'explore'
        },
        {
          path: 'message',
          element: 'message'
        },
        {
          path: 'notifications',
          element: 'notifications'
        },
        {
          path: 'myusername',
          element: <Profile/>
        },
      ]
    }
  ])
  return routes
}

export default App;
