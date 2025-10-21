import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const LoginForm = lazy(() => import("auth/LoginForm"));
const SignupForm = lazy(() => import("auth/SignupForm"));
const HomePage = lazy(() => import("home/HomePage"));
const MovieDetailsPage = lazy(() => import("home/MovieDetailsPage"));
const BookingPage = lazy(() => import("booking/BookingPage"));
const BookingConfirmationPage = lazy(() => import("booking/BookingConfirmationPage"));

const App: React.FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" replace /> },
    {
      path: "/login",
      element: (
        <Suspense fallback={<p>Loading Login...</p>}>
          <LoginForm />
        </Suspense>
      ),
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<p>Loading Signup...</p>}>
          <SignupForm />
        </Suspense>
      ),
    },
    {
      path: "/home",
      element: (
        <Suspense fallback={<p>Loading Home...</p>}>
          <HomePage username="Guest" logout={() => console.log("Logged out")} />
        </Suspense>
      ),
      errorElement: <p>Something went wrong loading Home.</p>,
    },
    {
      path: "/movie/:id",
      element: (
        <Suspense fallback={<p>Loading Movie Details...</p>}>
          <MovieDetailsPage />
        </Suspense>
      ),
    },
    {
      path: "/booking",
      element: (
        <Suspense fallback={<p>Loading Booking...</p>}>
          <BookingPage />
        </Suspense>
      ),
    },
    {
      path: "/confirmation",
      element: (
        <Suspense fallback={<p>Loading Confirmation...</p>}>
          <BookingConfirmationPage />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
