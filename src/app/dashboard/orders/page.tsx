"use client";
import { useState, useEffect, useCallback } from "react";
import { getAllOrders } from "@/services/order-service";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";
import { SearchIcon } from "@/utils/icons/SearchIcon";
import {
  Button,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { FaEye } from "react-icons/fa";

export default function UsersDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null) as any;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  const handleOpenModal = (order: any) => {
    setSelectedOrder(order);
    onOpen();
  };

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
        return `${order.user.firstName} ${order.user.lastName}`;
      case "products":
        return (
          <Button
            onPress={() => handleOpenModal(order)}
            className="bg-transparent"
          >
            <FaEye /> (
            {order.products.length == 1
              ? "1 producto"
              : `${order.products.length} productos`}
            )
          </Button>
        );
      case "totalPrice":
        return "S/." + order.totalPrice;
      default:
        return cellValue;
    }
  }, []);

  const columns = [
    { name: "Usuario", uid: "user.username" },
    { name: "Estatus", uid: "status" },
    { name: "Productos", uid: "products" },
    { name: "Total", uid: "totalPrice" },
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
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedOrder && (
                  <>
                    <div className="flex justify-start gap-x-2 items-center">
                      <h3>
                        Orden de {selectedOrder.user.firstName}{" "}
                        {selectedOrder.user.lastName}
                      </h3>
                      <Chip
                        color={statusColorMap[selectedOrder.status]}
                        size="sm"
                        variant="flat"
                      >
                        {selectedOrder.status}
                      </Chip>
                    </div>
                  </>
                )}
              </ModalHeader>
              <ModalBody>
  {selectedOrder ? (
    <div className="p-6 text-gray-800 space-y-6 bg-white rounded-lg shadow-lg">
      <ul className="space-y-6">
        {selectedOrder.products?.length > 0 ? (
          selectedOrder.products.map((productItem: any, index: number) => (
            <li key={index} className="flex items-center border-b pb-6 border-gray-300">
              <img
                src={productItem.product?.image || "/path/to/default-image.jpg"}
                alt={productItem.product?.name || "Producto sin nombre"}
                className="w-20 h-20 object-cover rounded-lg mr-6"
              />
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">
                  {productItem.product?.name || "Producto sin nombre"}
                </h4>
                <p className="text-sm text-gray-600">Color: {productItem.product?.color || "Sin color"}</p>
                <p className="text-sm text-gray-600">Cantidad: <strong>{productItem.quantity}</strong></p>
                <p className="text-sm font-semibold text-gray-800">Total: ${(
                  productItem.product?.price * productItem.quantity
                ).toFixed(2)}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No hay productos en esta orden.</p>
        )}
      </ul>

      {/* Detalles del cliente */}
      <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <h4 className="font-semibold text-xl text-gray-900 mb-4">Detalles del Cliente</h4>
        <p><strong className="text-gray-700">Nombre:</strong> {selectedOrder.user.firstName} {selectedOrder.user.lastName}</p>
        <p><strong className="text-gray-700">Correo:</strong> {selectedOrder.user.email}</p>
        <p><strong className="text-gray-700">Teléfono:</strong> {selectedOrder.user.phone}</p>
        <p><strong className="text-gray-700">Documento:</strong> {selectedOrder.user.documentNumber}</p>
        <p><strong className="text-gray-700">Dirección de Envío:</strong> {selectedOrder.shippingAddress}</p>
        <p><strong className="text-gray-700">Fecha de Entrega:</strong> {selectedOrder.deliveryDate}</p>
        <p><strong className="text-gray-700">Horario de Entrega:</strong> {selectedOrder.deliveryTime}</p>
      </div>

      {/* Total del pedido */}
      <div className="mt-6 text-right font-bold text-xl text-gray-900">
        Total del Pedido: $
        {selectedOrder.products.reduce(
          (acc: number, productItem: any) =>
            acc + (productItem.product?.price || 0) * productItem.quantity,
          0
        ).toFixed(2)}
      </div>
    </div>
  ) : (
    <p>No se ha seleccionado una orden.</p>
  )}
</ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
