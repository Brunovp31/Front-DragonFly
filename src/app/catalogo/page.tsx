"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/services/product-service";
import { Range, getTrackBackground } from "react-range";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

interface Category {
  name: string;
  subcategories: string[];
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  hoverImage: string;
  isFeatured: boolean;
  isOnSale: boolean;
}

const categories: Category[] = [
  { name: "Flores", subcategories: ["Anturios", "Orquídeas"] },
  {
    name: "Arreglos Florales",
    subcategories: [
      "Escritorios",
      "Jardines",
      "Oficinas",
      "Restaurantes",
      "Salas",
    ],
  },
  { name: "Condolencias", subcategories: ["Lágrimas", "Coronas"] },
  {
    name: "Cuidado de la planta",
    subcategories: [
      "Estimulantes de raíces",
      "Fertilizantes Líquidos",
      "Humificadores",
      "Macetas",
    ],
  },
  {
    name: "Ocaciones Especiales",
    subcategories: [
      "Aniversarios",
      "Bautizo",
      "Cumpleaños",
      "Día de la Madre",
      "Día del Padre",
      "Graduaciones",
      "Inauguración de Negocios",
      "Matrimonio",
      "Nacimiento",
      "San Valentín",
    ],
  },
  { name: "Ramos y Boxes", subcategories: ["Ramos", "Boxes"] },
];

const MIN = 0;
const MAX = 500;

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Por Defecto");
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN, MAX]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    applyFilters();
  }, [sortOrder]);

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

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const applyFilters = () => {
    const filtered = products
      .filter((product) =>
        selectedCategory ? product.category === selectedCategory : true
      )
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      )
      .sort((a, b) => {
        switch (sortOrder) {
          case "Destacados":
            return Number(b.isFeatured) - Number(a.isFeatured);
          case "Ofertas":
            return Number(b.isOnSale) - Number(a.isOnSale);
          case "Precio: Bajo a Alto":
            return a.price - b.price;
          case "Precio: Alto a Bajo":
            return b.price - a.price;
          case "A-Z":
            return a.name.localeCompare(b.name);
          case "Z-A":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });

    setProducts(filtered);
  };

  return (
    <main className="container mx-auto p-6 flex">
      <aside className="w-1/4 pr-6 border-r border-gray-300">
        {/* Menú de categorías */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Menú Categorías
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer ${
                !selectedCategory ? "font-bold text-black" : ""
              }`}
            ></li>
            {categories.map((category) => (
              <li key={category.name} className="cursor-pointer">
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleCategory(category.name)}
                >
                  <span
                    className={`${
                      selectedCategory === category.name
                        ? "font-bold text-black"
                        : ""
                    }`}
                  >
                    {category.name}
                  </span>
                  <span className="text-xl">
                    {expandedCategories[category.name] ? "−" : "+"}
                  </span>
                </div>
                {expandedCategories[category.name] && (
                  <ul className="ml-4 mt-2 space-y-1 text-gray-500">
                    {category.subcategories.map((subcat) => (
                      <li
                        key={subcat}
                        onClick={() => {
                          setSelectedCategory(subcat);
                        }}
                        className="cursor-pointer hover:text-black"
                      >
                        {subcat}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Filtro de precio */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-9 text-gray-800">
            Filtrar por Precio
          </h2>
          <Range
            disabled={loading}
            values={priceRange}
            step={1}
            min={MIN}
            max={MAX}
            onChange={(values) => setPriceRange(values as [number, number])}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  height: "10px", // Altura del track
                  width: "100%",
                  background: getTrackBackground({
                    values: priceRange,
                    colors: ["#ddd", "#007BFF", "#ddd"],
                    min: MIN,
                    max: MAX,
                  }),
                  borderRadius: "5px",
                  alignSelf: "center",
                  marginTop: "6px",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  height: "20px", // Tamaño de los puntos
                  width: "20px",
                  backgroundColor: "#007BFF",
                  borderRadius: "50%",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  outline: "none",
                  border: "2px solid white",
                  marginTop: "-20px", //Alineación del punto
                }}
              />
            )}
          />
          <div className="text-gray-600 mt-2">
            Precio: /S {priceRange[0]} — S/ {priceRange[1]}
          </div>
          <button
            onClick={applyFilters}
            className={`py-2 px-4 rounded mt-4 ${
              loading ? "bg-gray-500 text-white" : "bg-blue-500 text-white"
            }`}
            title="Filtrar"
            aria-label="Filtrar"
            disabled={loading}
          >
            Filtrar
          </button>
        </div>
      </aside>

      <section className="w-3/4 pl-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${
                viewMode === "grid" ? "font-bold text-black" : "text-gray-600"
              }`}
              title="Ver en cuadrícula"
              aria-label="Ver en cuadrícula"
            >
              <img
                src="mosaico.png"
                alt="Vista en cuadrícula"
                className="w-5 h-5 inline"
              />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${
                viewMode === "list" ? "font-bold text-black" : "text-gray-600"
              }`}
              title="Ver en lista"
              aria-label="Ver en lista"
            >
              <img
                src="lista.png"
                alt="Vista en lista"
                className="w-8 h-8 inline"
              />
            </button>
          </div>

          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
            className="border rounded p-2 text-gray-600 focus:outline-none"
            aria-label="Ordenar productos"
          >
            <option value="Por Defecto">Por Defecto</option>
            <option value="Destacados">Ordenado por destacados</option>
            <option value="Ofertas">Ordenado por productos en oferta</option>
            <option value="Precio: Bajo a Alto">
              Ordenado por precio más bajo
            </option>
            <option value="Precio: Alto a Bajo">
              Ordenado por precio más alto
            </option>
            <option value="A-Z">Ordenado alfabéticamente, A-Z</option>
            <option value="Z-A">Ordenado alfabéticamente, Z-A</option>
          </select>
        </div>

        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-6`}
        >
          {loading ? (
            <div className="mt-8 flex justify-center items-center">
              <FlowerSpinner />
            </div>
          ) : (
            <>
              {products.length === 0 ? (
                <div className="text-center text-gray-500">
                  No hay productos disponibles
                </div>
              ) : (
                products.map((product) => (
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
