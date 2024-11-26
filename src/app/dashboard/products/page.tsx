"use client";
import { deleteProduct, getAllProducts } from "@/services/product-service";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";
import { EditIcon } from "@/utils/icons/EditIcon";
import { EyeIcon } from "@/utils/icons/EyeIcon";
import { SearchIcon } from "@/utils/icons/SearchIcon";
import {
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import CreateProductDashboard from "../components/products/create-product-dashboard";
import UpdateDetailProduct from "../components/products/update-detail-product-dashboard"; 
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

export default function ProductsDashboard() {
  const [products, setProducts] = useState([]); // Productos originales
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos filtrados
  const [loading, setLoading] = useState(true);
  const [openDetail, setOpenDetail] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null) as any;
  const [modalType, setModalType] = useState("details");
  const [searchText, setSearchText] = useState(""); // Texto del buscador

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data); // Inicializa los productos filtrados
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      handleReload();
    } catch (error) {
      console.error("Error al eliminar un Producto:", error);
    }
  };

  const handleReload = async () => {
    setLoading(true);
    const data = await getAllProducts();
    setProducts(data);
    setFilteredProducts(data); // Reinicia los productos filtrados
    setLoading(false);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    if (value.trim() === "") {
      setFilteredProducts(products); // Muestra todos los productos si no hay texto
    } else {
      const lowercasedValue = value.toLowerCase();
      const filtered = products.filter((product: any) =>
        product.name.toLowerCase().includes(lowercasedValue) || // Filtra por nombre
        product.category?.name?.toLowerCase().includes(lowercasedValue) // Filtra por categoría
      );
      setFilteredProducts(filtered);
    }
  };

  const renderCell = useCallback((product: any, columnKey: any) => {
    const cellValue = product[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: product.image }}
            description={product.description}
            name={cellValue}
          />
        );
      case "category":
        return product.category ? product.category.name : "Sin categoría";
      case "price":
        return `$${cellValue}`;
      case "stock":
        return `${cellValue} unidades`;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentProduct(product);
                  setModalType("details");
                  setOpenDetail(true);
                }}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar producto">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentProduct(product);
                  setModalType("update");
                  setOpenDetail(true);
                }}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar producto">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDeleteProduct(product.id)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    {
      name: "Nombre",
      uid: "name",
    },
    {
      name: "Categoría",
      uid: "category",
    },
    {
      name: "Precio",
      uid: "price",
    },
    {
      name: "Stock",
      uid: "stock",
    },
    {
      name: "Descuento",
      uid: "discount",
    },
    {
      name: "Acciones",
      uid: "actions",
    },
  ];

  return (
    <div className="flex flex-col gap-y-2 p-2">
      <div className="flex justify-between px-10 items-center">
        <Input
          label="Buscador"
          isClearable
          radius="lg"
          className="mr-2"
          placeholder="Escribe para buscar ..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <CreateProductDashboard handleReload={handleReload} />
      </div>
      {loading ? (
        <div className="mt-8 flex justify-center items-center">
          <FlowerSpinner />
        </div>
      ) : (
        <Table aria-label="Product Table - DragonFly">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={filteredProducts}>
            {(item: any) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      {currentProduct && (
        <UpdateDetailProduct
          id={currentProduct.id}
          open={openDetail}
          type={modalType}
          onClose={() => setOpenDetail(false)}
          handleReload={handleReload}
        />
      )}
    </div>
  );
}
