"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Input, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from "@nextui-org/react";
import { EyeIcon } from "@/utils/icons/EyeIcon";
import { EditIcon } from "@/utils/icons/EditIcon";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";
import { getAllPedidos } from "@/services/delivery-service";  // Asegúrate de tener este servicio.
import OrderDetails from "@/components/OrderDetails"; // Suponiendo que tienes este componente.
import DeliveryStatusModal from './DeliveryStatusModal'; // Si lo necesitas.
import FlowerSpinner from "@/utils/icons/FlowerSpinner";

const DeliveryDashboard = () => {
  const [pedidos, setPedidos] = useState([] as any);
  const [loading, setLoading] = useState(true);
  const [selectedPedido, setSelectedPedido] = useState(null as any);
  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const data = await getAllPedidos(); // Servicio para obtener los pedidos.
        setPedidos(data);
      } catch (error) {
        console.error("Error al cargar pedidos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPedidos();
  }, []);

  const handleOrderClick = (pedido: any) => {
    setSelectedPedido(pedido);
    setOpenDetail(true);
  };

  const handleDeletePedido = async (id: string) => {
    try {
      // Implementar la lógica para eliminar un pedido
      // await deletePedido(id);
      // Luego recargar los pedidos
      setPedidos(pedidos.filter((pedido: any) => pedido.id !== id));
    } catch (error) {
      console.error("Error al eliminar pedido:", error);
    }
  };

  const renderCell = useCallback((pedido: any, columnKey: string) => {
    const cellValue = pedido[columnKey];
    switch (columnKey) {
      case "nombre":
        return `${pedido.nombre} ${pedido.apellido}`;
      case "pedido":
        return pedido.pedido;
      case "estado":
        return pedido.estado;
      case "acciones":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detalles">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => handleOrderClick(pedido)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Eliminar pedido">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDeletePedido(pedido.documento)}
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
    { name: "Cliente", uid: "nombre" },
    { name: "Pedido", uid: "pedido" },
    { name: "Estado", uid: "estado" },
    { name: "Acciones", uid: "acciones" },
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
        />
      </div>
      {loading ? (
        <div className="mt-8 flex justify-center items-center">
          <FlowerSpinner />
        </div>
      ) : (
        <Table aria-label="Delivery Table - DragonFly">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={pedidos}>
            {(item) => (
              <TableRow key={item.documento}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}

      {selectedPedido && (
        <OrderDetails
          orderId={selectedPedido.documento}
          products={selectedPedido.pedido} // Ajusta esto según la estructura del pedido.
          customerName={`${selectedPedido.nombre} ${selectedPedido.apellido}`}
          deliveryAddress={selectedPedido.direccion}
          deliveryPerson="Repartidor asignado" // Este valor debería ser dinámico si tienes esa data.
          open={openDetail}
          onClose={() => setOpenDetail(false)}
        />
      )}
    </div>
  );
};

export default DeliveryDashboard;
