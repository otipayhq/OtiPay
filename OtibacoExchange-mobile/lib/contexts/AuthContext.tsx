import React, { createContext, useState } from 'react';

interface AuthContextType {
  fullName: string;
  setFullName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  fullName: '',
  setFullName: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContext.Provider
      value={{
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
