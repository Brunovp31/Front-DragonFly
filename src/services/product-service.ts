import { generalRoutes } from "@/utils/routes/general.routes";

const BASE_URL = generalRoutes.BASE_URL;

type productType = {
  name?: string;
  description?: string;
  price?: number;
};
export const createProduct = async (form: any) => {
  try {
    await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("Error al crear un Producto:", error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de productos:", error);
    throw error;
  }
};

export const updateProduct = async (form: productType, id?: string) => {
  try {
    await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        //  Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(form),
    });
  } catch (error) {
    console.error("Error al actualizar un Producto:", error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      headers: {},
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de Producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  } catch (error) {
    console.error("Error al eliminar un Producto:", error);
    throw error;
  }
};
// /products/top4
export const getTop4Products = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/top4`, {
      headers: {},
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de productos:", error);
    throw error;
  }
}
