import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useAuthStore } from '../store/auth';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async (data: { username: string; password: string }) => {
    await login(data.username, data.password);
    navigate('/');
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}