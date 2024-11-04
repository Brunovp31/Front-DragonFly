import { generalRoutes } from "@/utils/routes/general.routes";

const BASE_URL = generalRoutes.BASE_URL;

export const createProduction = async (form: any) => {
  try {
    await fetch(`${BASE_URL}/productions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("Error al crear producción:", error);
    throw error;
  }
};

export const getAllProductions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/productions`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las producciones:", error);
    throw error;
  }
};

export const getProductionById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/productions/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la producción:", error);
    throw error;
  }
};

export const updateProduction = async (form: any, id: string) => {
  try {
    await fetch(`${BASE_URL}/productions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("Error al actualizar producción:", error);
    throw error;
  }
};

export const deleteProduction = async (id: string) => {
  try {
    await fetch(`${BASE_URL}/productions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error al eliminar la producción:", error);
    throw error;
  }
};
