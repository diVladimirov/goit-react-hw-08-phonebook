import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import authOperations from '../redux/auth/authOperations.js';
import PrivateRoute from './RouteType/PrivateRoute';
import PublicRoute from './RouteType/PublicRoute';

const HomePage = lazy(() =>
  import('pages/HomePage.js' /* webpackChunkName: "home-page" */)
);

const LoginPage = lazy(() =>
  import('pages/LoginPage.js' /* webpackChunkName: "login-page" */)
);

const RegisterPage = lazy(() =>
  import('pages/RegisterPage.js' /* webpackChunkName: "register-page" */)
);

const ContactsPage = lazy(() =>
  import('pages/ContactsPage.js' /* webpackChunkName: "contacts-page" */)
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="login"
                element={
                  <PublicRoute redirectPath="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectPath="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
