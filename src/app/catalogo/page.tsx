"use client";
import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/services/product-service";
import { useEffect, useState } from "react";

export default function Catalogo() {
  const [products, setProducts] = useState([] as any[]);
  useEffect(() => {
    getAllProducts()
      .then((data: any) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos por curso:", error);
      });
  }, []);

  return (
    <main className="container p-4 m-auto ">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 && (
          <div className="text-center">No hay productos disponibles</div>
        )}
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            hoverImage={product.hoverImage}
            productName={product.name}
            productDescription={product.description}
            productPrice={product.price}
          />
        ))}
      </div>
    </main>
  );
}



