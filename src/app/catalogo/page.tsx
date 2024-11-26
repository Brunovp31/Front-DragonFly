"use client"; // Add this line to mark the component as a client component

import React, { useEffect, useState, useMemo } from "react";
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

const CATEGORIES = [
  "Anturio",
  "Orquidea",
  "Abono Orgánico",
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
  const [sortOption, setSortOption] = useState<string>("default");
  const [loading, setLoading] = useState(true);
  const [showRecommended, setShowRecommended] = useState(false); // New state for recommended filter
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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

  const applyFilters = useMemo(() => {
    let filteredProducts = products
      .filter((product) =>
        selectedCategory ? product.category === selectedCategory : true
      )
      .filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );

    if (showRecommended) {
      filteredProducts = filteredProducts.filter((product) => product.recommended);
    }

    switch (sortOption) {
      case "low-to-high":
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filteredProducts;
  }, [products, selectedCategory, priceRange, sortOption, showRecommended]);

  const totalPages = Math.ceil(applyFilters.length / itemsPerPage);
  const paginatedProducts = applyFilters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <FlowerSpinner />
      </div>
    );
  }

  return (
    <main className="container mx-auto p-6 flex">
      <aside className="w-full sm:w-1/4 pr-6 border-r border-gray-300">
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
                className={`cursor-pointer ${selectedCategory === category ? "font-bold text-black" : ""}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

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

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={showRecommended}
            onChange={() => setShowRecommended(!showRecommended)}
            className="mr-2"
          />
          <label>Mostrar productos recomendados</label>
        </div>
      </aside>

      <section className="w-full sm:w-3/4 pl-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.length === 0 ? (
            <div className="text-center text-gray-500">
              No hay productos disponibles
            </div>
          ) : (
            paginatedProducts.map((product) => (
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
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Anterior
          </button>
          <span className="mx-4">Página {currentPage} de {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Siguiente
          </button>
        </div>
      </section>
    </main>
  );
}
