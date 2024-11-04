import { login } from "@/services/auth-services";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: any;
  loading: boolean;
  loginAuth: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  loginAuth: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const rolesAndPermissions: any = {
  ADMIN: ["/*"],
  WORKER: ["/dashboard", "/dashboard/categories", "/dashboard/products"],
  DELIVERY: [],
  GARDENER: [],
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // TODO: Validar token con el backend
      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      const userRoles = decodedToken.role?.map((r: any) => r.authority) || [];

      // Verificar si el usuario tiene permiso para la ruta actual
      const hasPermission = userRoles.some((role: string) => {
        const allowedRoutes = rolesAndPermissions[role];
        return allowedRoutes.includes("/*") || allowedRoutes.includes(pathName);
      });

      if (!hasPermission && pathName.startsWith("/dashboard")) {
        router.push("/dashboard");
      } else {
        setUser({ token, ...decodedToken });
      }
    }
    setLoading(false);
  }, [router, pathName]);

  const loginAuth = async (username: string, password: string) => {
    try {
      const response = await login(username, password);
      if (!response) {
        throw new Error("Invalid credentials");
      }
      localStorage.setItem("token", response);
      const decodedToken = JSON.parse(atob(response.split(".")[1]));
      setUser({ token: response, ...decodedToken });
      const defaultRoute = decodedToken.role.some(
        (r: any) => r.authority === "ADMIN"
      )
        ? "/dashboard/products"
        : "/";
      router.push(defaultRoute);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginAuth, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
