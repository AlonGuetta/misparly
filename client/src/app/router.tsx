import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../shared/layout/MainLayout/MainLayout';
import  HomePage  from '../pages/HomePage/HomePage';
import  ResultPage  from '../pages/ResultPage/ResultPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'vehicle/:vehicleNumber',
        element: <ResultPage />,
      },
    ],
  },
]);