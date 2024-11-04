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
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import CreateProductionDashboard from "../components/Productions/create-production-dashboard";
import UpdateDetailProduction from "../components/Productions/update-detail-production-dashboard";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

export default function ProductionsDashboard() {
  const [productions, setProductions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDetail, setOpenDetail] = useState(false);
  const [currentProduction, setCurrentProduction] = useState(null) as any;
  const [modalType, setModalType] = useState("details");

  useEffect(() => {
    const fetchProductions = async () => {
      try {
        const data = await getAllProductions();
        setProductions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductions();
  }, []);

  const handleDeleteProduction = async (id: string) => {
    try {
      await deleteProduction(id);
      handleReload();
    } catch (error) {
      console.error("Error al eliminar un registro:", error);
    }
  };

  const handleReload = async () => {
    setLoading(true);
    const data = await getAllProductions();
    setProductions(data);
    setLoading(false);
  };

  const renderCell = useCallback((production: any, columnKey: any) => {
    const cellValue = production[columnKey];
    switch (columnKey) {
      case "plantType":
        return production.plantType;
      case "color":
        return production.color;
      case "category":
        return production.category;
      case "quantity":
        return production.quantity;
      case "status":
        return production.status;
      case "skuCode":
        return production.skuCode;
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
                onClick={() => handleDeleteProduction(production.id)}
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
        <CreateProductionDashboard
          handleReload={async () => {
            setLoading(true);
            await handleReload();
          }}
        />
      </div>
      {loading ? (
        <div className="mt-8 flex justify-center items-center">
          <FlowerSpinner />
        </div>
      ) : (
        <Table aria-label="Productions Table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
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
          handleReload={async () => {
            setLoading(true);
            await handleReload();
          }}
        />
      )}
    </div>
  );
}
