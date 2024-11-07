import { generalRoutes } from "@/utils/routes/general.routes";

const BASE_URL = generalRoutes.BASE_URL_API;

export const createOrder = (userId: any, products: any) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    body: JSON.stringify({
      products: products.map((product: any) => ({
        product: {
          id: product.id,
        },
        quantity: product.quantity,
      })),
      user: {
        id: userId,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getOrderByUserId = (userId: any) => {
  return fetch(`${BASE_URL}/orders/user/${userId}`).then((res) => res.json());
};
