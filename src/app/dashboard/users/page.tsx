"use client";
import { getAllUsers } from "@/services/auth-services";
import { getUsersByRole } from "@/services/users-service";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";
import { SearchIcon } from "@/utils/icons/SearchIcon";

import {
  Chip,
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsersByRole(["USER"]);
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const statusColorMap = {
    ADMIN: "warning",
    USER: "success",
    DELIVERY: "info",
    WORKER: "error",
    GARDENER: "error",
  } as any;

  const renderCell = useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "role":
        return (
          <Chip color={statusColorMap[user.role]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
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
        <Table aria-label="Product Table - DragonFly">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
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
