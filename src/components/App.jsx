import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import authOperations from '../redux/auth/authOperations.js';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
