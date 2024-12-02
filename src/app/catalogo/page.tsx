"use client"; 

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
  const [showRecommended, setShowRecommended] = useState(false);
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
    let filteredProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategory === null ||
        (typeof product.category === "string" &&
          product.category.toLowerCase() === selectedCategory.toLowerCase());
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const recommendedMatch = !showRecommended || product.recommended;

      return categoryMatch && priceMatch && recommendedMatch;
    });

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
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 pr-8 mb-6 md:mb-0">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Categorías</h2>
            <ul className="space-y-2 text-gray-500">
              <li
                onClick={() => setSelectedCategory(null)}
                className={`cursor-pointer hover:text-black ${
                  !selectedCategory ? "font-bold text-black" : ""
                }`}
              >
                Todas
              </li>
              {CATEGORIES.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer hover:text-black ${
                    selectedCategory === category ? "font-bold text-black" : ""
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Filtrar por Precio</h2>
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
                    height: "6px",
                    width: "100%",
                    background: getTrackBackground({
                      values: priceRange,
                      colors: ["#ddd", "#4CAF50", "#ddd"],
                      min: MIN_PRICE,
                      max: MAX_PRICE,
                    }),
                    borderRadius: "3px",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    height: "16px",
                    width: "16px",
                    backgroundColor: "#4CAF50",
                    borderRadius: "50%",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
            />
            <div className="text-sm text-gray-500 mt-2">
              S/ {priceRange[0]} - S/ {priceRange[1]}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={showRecommended}
              onChange={() => setShowRecommended(!showRecommended)}
              className="mr-2"
            />
            <label className="text-gray-600">Mostrar productos recomendados</label>
          </div>
        </aside>

        {/* Main Section */}
        <section className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Catálogo</h1>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 text-sm"
            >
              <option value="default">Ordenar por</option>
              <option value="low-to-high">Precio más bajo</option>
              <option value="high-to-low">Precio más alto</option>
              <option value="recommended">Recomendados</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProducts.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                No hay productos disponibles
              </p>
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

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border rounded-lg text-gray-700 border-gray-300 hover:bg-gray-100 disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="mx-4 text-gray-500 text-sm">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border rounded-lg text-gray-700 border-gray-300 hover:bg-gray-100 disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
