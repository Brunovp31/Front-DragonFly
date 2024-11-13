// src/services/delivery-service.ts
export const getAllPedidos = async () => {
    try {
      const response = await fetch("/api/pedidos"); // Cambia la URL según tu API.
      if (!response.ok) {
        throw new Error("Error al obtener los pedidos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la obtención de pedidos:", error);
      return [];
    }
  };
  