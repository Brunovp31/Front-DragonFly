"use client";
import {
  deleteProduction,
  getAllProductions,
} from "@/services/production-service";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";
import { EditIcon } from "@/utils/icons/EditIcon";
import { EyeIcon } from "@/utils/icons/EyeIcon";
import { SearchIcon } from "@/utils/icons/SearchIcon";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useState } from "react";
import CreateProductionDashboard from "../components/Productions/create-production-dashboard";
import UpdateDetailProduction from "../components/Productions/update-detail-production-dashboard";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

export default function ProductionsDashboard() {
  // Datos simulados para la tabla
  const [productions, setProductions] = useState([
    {
      id: "1",
      plantType: "Rosa",
      color: "Rojo",
      category: "Flor",
      quantity: 10,
      status: "Disponible",
      skuCode: "FLR001",
    },
    {
      id: "2",
      plantType: "Girasol",
      color: "Amarillo",
      category: "Flor",
      quantity: 5,
      status: "Disponible",
      skuCode: "FLR002",
    },
    {
      id: "3",
      plantType: "Cactus",
      color: "Verde",
      category: "Suculenta",
      quantity: 5,
      status: "Agotado",
      skuCode: "SUC001",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [currentProduction, setCurrentProduction] = useState(null) as any;
  const [modalType, setModalType] = useState("details");

  const renderCell = (production: any, columnKey: any) => {
    const cellValue = production[columnKey];
    switch (columnKey) {
      case "plantType":
        // Simulación de imagen asociada al tipo de planta
        return (
          <div className="flex items-center gap-2">
            <img
              src={`/images/plants/${production.plantType.toLowerCase()}.png`}
              alt={production.plantType}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{production.plantType}</span>
          </div>
        );
      case "color":
        return <span>{production.color}</span>;
      case "category":
        return <span>{production.category}</span>;
      case "quantity":
        return <span>{production.quantity}</span>;
      case "status":
        return (
          <span
            className={`px-2 py-1 rounded ${
              cellValue === "Disponible"
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
          >
            {cellValue}
          </span>
        );
      case "skuCode":
        return <span>{production.skuCode}</span>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentProduction(production);
                  setModalType("details");
                  setOpenDetail(true);
                }}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setCurrentProduction(production);
                  setModalType("update");
                  setOpenDetail(true);
                }}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => console.log(`Eliminar: ${production.id}`)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  const columns = [
    { name: "Tipo de Planta", uid: "plantType" },
    { name: "Color", uid: "color" },
    { name: "Categoría", uid: "category" },
    { name: "Cantidad", uid: "quantity" },
    { name: "Estado", uid: "status" },
    { name: "Código SKU", uid: "skuCode" },
    { name: "Acciones", uid: "actions" },
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
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <CreateProductionDashboard handleReload={() => console.log("Reload")} />
      </div>
      {loading ? (
        <div className="mt-8 flex justify-center items-center">
          <FlowerSpinner />
        </div>
      ) : (
        <Table aria-label="Productions Table">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
          </TableHeader>
          <TableBody items={productions}>
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
      {currentProduction && (
        <UpdateDetailProduction
          id={currentProduction.id}
          open={openDetail}
          type={modalType}
          onClose={() => setOpenDetail(false)}
          handleReload={() => console.log("Reload")}
        />
      )}
    </div>
  );
}

