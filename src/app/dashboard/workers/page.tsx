"use client";
import { getUsersByRole } from "@/services/users-service";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";
import { SearchIcon } from "@/utils/icons/SearchIcon";

import {
  Chip,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

export default function WorkersDashboard() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const data = await getUsersByRole([
          "WORKER",
          "ADMIN",
          "DELIVERY",
          "GARDENER",
        ]);
        setWorkers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkers();
  }, []);

  type colors =
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  const statusColorMap = {
    ADMIN: "warning",
    DELIVERY: "danger",
    WORKER: "success",
    GARDENER: "secondary",
  } as Record<string, colors>;

  const renderCell = useCallback((worker: any, columnKey: any) => {
    const cellValue = worker[columnKey];
    switch (columnKey) {
      case "role":
        return (
          <Chip color={statusColorMap[worker.role]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      default:
        return cellValue || "N/A";
    }
  }, []);

  const columns = [
    {
      name: "Nombre",
      uid: "firstName",
    },
    {
      name: "Apellido",
      uid: "lastName",
    },
    {
      name: "Nombre de usuario",
      uid: "username",
    },
    {
      name: "Rol",
      uid: "role",
    },
    {
      name: "Tipo de Documento",
      uid: "documentType",
    },
    {
      name: "Número de Documento",
      uid: "documentNumber",
    },
    {
      name: "Fecha de Nacimiento",
      uid: "birthDate",
    },
    {
      name: "Dirección de Domicilio",
      uid: "address",
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
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      {loading ? (
        <div className="mt-8 flex justify-center items-center">
          <FlowerSpinner />
        </div>
      ) : (
        <Table aria-label="Worker Table - Floreria">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={workers}>
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
    </div>
  );
}
