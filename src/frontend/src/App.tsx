import { createRouter, createRoute, createRootRoute, RouterProvider } from '@tanstack/react-router';
import PaymentPage from './pages/PaymentPage';

const rootRoute = createRootRoute({
  component: () => <PaymentPage />
});

const router = createRouter({
  routeTree: rootRoute
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
