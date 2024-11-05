import { login } from "@/services/auth-services";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: any;
  loading: boolean;
  loginAuth: (username: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  loginAuth: async () => {},
  logout: () => {},
  error: null,
  clearError: () => {},
});

export const useAuth = () => useContext(AuthContext);

const rolesAndPermissions: any = {
  ADMIN: ["/*"],
  WORKER: ["/dashboard", "/dashboard/categories", "/dashboard/products"],
  DELIVERY: [],
  GARDENER: ["/dashboard", "/dashboard/productions"],
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userRoles = decodedToken.role?.map((r: any) => r.authority) || [];
      const hasPermission = userRoles.some((role: string) => {
        const allowedRoutes = rolesAndPermissions[role];
        return allowedRoutes.includes("/*") || allowedRoutes.includes(pathName);
      });

      if (!hasPermission && pathName.startsWith("/dashboard")) {
        router.push("/");
      } else {
        setUser({ token, ...decodedToken });
      }
    }
    setLoading(false);
  }, [router, pathName]);

  const clearError = () => setError(null);

  const loginAuth = async (username: string, password: string) => {
    try {
      const response = await login(username, password);
      if (!response) {
        throw new Error("Credenciales inválidas");
      }
      localStorage.setItem("token", response);
      const decodedToken = JSON.parse(atob(response.split(".")[1]));
      setUser({ token: response, ...decodedToken });
      setError(null); // Restablecer error si el login es exitoso

      const defaultRoute = decodedToken.role.some(
        (r: any) => r.authority !== "USER"
      )
        ? "/dashboard"
        : "/";

      router.push(defaultRoute);
    } catch (error: any) {
      console.error("Error durante el login:", error);
      setError(error.message); // Establecer el mensaje de error
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, loginAuth, logout, error, clearError }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
