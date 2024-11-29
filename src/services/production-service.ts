import { generalRoutes } from "@/utils/routes/general.routes";

const BASE_URL = generalRoutes.BASE_URL;

export const createProduction = async (form: any) => {
  try {
    const response = await fetch(`${BASE_URL}/productions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    return await handleJSONResponse(response);
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

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    return await handleJSONResponse(response);
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

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    return await handleJSONResponse(response);
  } catch (error) {
    console.error("Error al obtener la producción:", error);
    throw error;
  }
};

export const updateProduction = async (form: any, id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/productions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    return await handleJSONResponse(response);
  } catch (error) {
    console.error("Error al actualizar producción:", error);
    throw error;
  }
};

export const deleteProduction = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/productions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
    }

    return await handleJSONResponse(response);
  } catch (error) {
    console.error("Error al eliminar la producción:", error);
    throw error;
  }
};

// Función auxiliar para manejar y validar respuestas JSON
const handleJSONResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");

  // Verifica que la respuesta sea JSON
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("La respuesta no es JSON válida.");
  }

  // Verifica que haya contenido en la respuesta
  const text = await response.text();
  if (!text) {
    throw new Error("La respuesta está vacía.");
  }

  // Intenta parsear el contenido como JSON
  try {
    return JSON.parse(text);
  } catch (error: any) {
    // Usa String(error) para asegurar un mensaje legible
    throw new Error("Error al parsear JSON: " + (error?.message || String(error)));
  }
};