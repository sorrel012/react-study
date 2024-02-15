// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Homepage from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import EditEvent from './pages/EditEvent';
import NewEventPage from './pages/NewEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/events', element: <Events /> },
      { path: '/events/:eventId', element: <EventDetail /> },
      { path: '/events/:eventId/edit', element: <EditEvent /> },
      { path: '/events/new', element: <NewEventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
