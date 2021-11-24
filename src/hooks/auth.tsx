import React, { createContext, useState, useEffect, useContext } from "react";

import * as auth from "../services/auth";
import {useNavigate} from 'react-router-dom';


interface User {
  nome: string;
  login: string;
  senha: string;
  admin:boolean;
}

interface RequestSignIn {
  login: string;
  senha: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({ login, senha }: RequestSignIn): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    var userAux =  localStorage.getItem('User');
    if(userAux){
      setUser(JSON.parse(userAux))
    }
  
  },[])

  async function signIn({ login, senha }: RequestSignIn) {
    setLoading(true);
    const response = await auth.signIn({ login, senha });
    if(response){
      setUser(response.user);
      localStorage.clear();
      localStorage.setItem("User",JSON.stringify(response.user));

      navigate("/pages/home");
    }
    
    setLoading(false);

  }
  async function signOut() {
    setUser(null);
    localStorage.clear();
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
