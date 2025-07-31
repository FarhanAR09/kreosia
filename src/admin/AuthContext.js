'use client';
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const PASSWORD_HASH = "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb9"; // hashed "yourpassword" with SHA-256

const hash = async (text) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
};

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("auth_token");
    if (stored === PASSWORD_HASH) setAuthenticated(true);
  }, []);

  const login = async (password) => {
    const inputHash = await hash(password);
    if (inputHash === PASSWORD_HASH) {
      localStorage.setItem("auth_token", inputHash);
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
