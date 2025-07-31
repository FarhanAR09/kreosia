"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAdminAuth({ redirectTo = "/admin/login", protect = true } = {}) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Delay effect to ensure localStorage is available (in client)
    const checkAuth = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("admin-token") : null;

      if (token) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        if (protect) {
          // Delay to next tick to avoid race with hydration
          setTimeout(() => router.replace(redirectTo), 0);
        }
      }

      setLoading(false);
    };

    checkAuth();
  }, [router, redirectTo, protect]);

  const login = (token) => {
    localStorage.setItem("admin-token", token);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("admin-token");
    setAuthenticated(false);
    router.replace("/admin/login");
  };

  return { authenticated, loading, login, logout };
}
