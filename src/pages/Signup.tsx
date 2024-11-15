import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useAuthStore } from '../store/auth';

export default function Signup() {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);

  const handleSignup = async (data: { username: string; password: string }) => {
    await signup(data.username, data.password);
    navigate('/');
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
}