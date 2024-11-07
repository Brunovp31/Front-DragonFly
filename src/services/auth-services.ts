import { generalRoutes } from "@/utils/routes/general.routes";
const BASE_URL = generalRoutes.BASE_URL;

export const login = async (username: any, password: any) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (form: any) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      headers: {
        //
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de usuario:", error);
    throw error;
  }
};

export const getUserByToken = async (token: any) => {
  try {
    const response = await fetch(`${BASE_URL}/by-token/${token}`);
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error al obtener datos de usuario:", error);
    throw error;
  }
};
