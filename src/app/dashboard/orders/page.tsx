"use client";
import { getAllOrders } from "@/services/order-service";
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

export default function UsersDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrders();
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const statusColorMap = {
    SUCCESS: "success",
    DENIED: "danger",
    PENDING: "warning",
  } as any;

  const renderCell = useCallback((order: any, columnKey: any) => {
    const cellValue = order[columnKey];
    switch (columnKey) {
      case "status":
        return (
          <Chip color={statusColorMap[order.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "user.username":
        return order.user.firstName + " " + order.user.lastName;
      case "products":
        return (
          <ul>
            {order.products.map((productItem: any, index: any) => (
              <li key={index}>
                {productItem.product.name} - Quantity: {productItem.quantity}
              </li>
            ))}
          </ul>
        );
      case "totalPrice":
        return "S/." + order.totalPrice;
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    {
      name: "Usuario",
      uid: "user.username",
    },
    {
      name: "Estatus",
      uid: "status",
    },
    {
      name: "Productos",
      uid: "products",
    },
    {
      name: "Total",
      uid: "totalPrice",
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
          <TableBody items={orders}>
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
