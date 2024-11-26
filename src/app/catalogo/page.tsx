"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/services/product-service";
import { Range, getTrackBackground } from "react-range";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  recommended: boolean;
  image: string;
  hoverImage: string;
}

// Actualizamos las categorías
const CATEGORIES = [
  "Abono Orgánico",
  "Flores",
  "Macetas",
  "Ocasiones Especiales",
  "Abono Líquido",
  "Fertilizante Líquido",
  "Fertilizante Granular",
  "Sustrato",
];

const MIN_PRICE = 0;
const MAX_PRICE = 500;

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);
  const [sortOption, setSortOption] = useState<string>("default"); // Nueva variable para ordenar
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data: Product[] = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Aplicar filtros
  const applyFilters = () => {
    let filteredProducts = products
      .filter((product) =>
        selectedCategory ? product.category === selectedCategory : true
      )
      .filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );

    // Aplicar ordenamiento
    switch (sortOption) {
      case "low-to-high":
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "recommended":
        filteredProducts = filteredProducts.filter((product) => product.recommended);
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters();

  return (
    <main className="container mx-auto p-6 flex">
      <aside className="w-1/4 pr-6 border-r border-gray-300">
        {/* Filtros de categoría */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Categorías</h2>
          <ul className="space-y-2 text-gray-600">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer ${!selectedCategory ? "font-bold text-black" : ""}`}
            >
              Todas
            </li>
            {CATEGORIES.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer ${
                  selectedCategory === category ? "font-bold text-black" : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Filtro de precio */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtrar por Precio</h2>
          <Range
            disabled={loading}
            values={priceRange}
            step={1}
            min={MIN_PRICE}
            max={MAX_PRICE}
            onChange={(values) => setPriceRange(values as [number, number])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  height: "10px",
                  width: "100%",
                  background: getTrackBackground({
                    values: priceRange,
                    colors: ["#ddd", "#007BFF", "#ddd"],
                    min: MIN_PRICE,
                    max: MAX_PRICE,
                  }),
                  borderRadius: "5px",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  height: "20px",
                  width: "20px",
                  backgroundColor: "#007BFF",
                  borderRadius: "50%",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            )}
          />
          <div className="text-gray-600 mt-2">
            Precio: S/ {priceRange[0]} — S/ {priceRange[1]}
          </div>
        </div>
      </aside>

      <section className="w-3/4 pl-6">
        {/* Menú desplegable para ordenar */}
        <div className="flex justify-end mb-6">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            <option value="default">Ordenar por</option>
            <option value="low-to-high">Precio más bajo</option>
            <option value="high-to-low">Precio más alto</option>
            <option value="recommended">Recomendados</option>
          </select>
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="mt-8 flex justify-center items-center">
              <FlowerSpinner />
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <div className="text-center text-gray-500">
                  No hay productos disponibles
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    hoverImage={product.hoverImage}
                    productName={product.name}
                    productDescription={product.description}
                    productPrice={product.price}
                  />
                ))
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
