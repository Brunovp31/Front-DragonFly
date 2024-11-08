import { generalRoutes } from "@/utils/routes/general.routes";
const BASE_URL = generalRoutes.BASE_URL;

type Role = "WORKER" | "ADMIN" | "USER" | "DELIVERY" | "GARDENER";

export const getUsersByRole = async (role: Role[]) => {
  try {
    const response = await fetch(
      `${BASE_URL}/by-role?role=${role.join("&role=")}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de usuario:", error);
    throw error;
  }
};

export const getCountUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/count`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de usuario:", error);
    throw error;
  }
};
