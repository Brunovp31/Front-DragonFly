import { Table, TableBody, TableCell, TableHeader, TableRow } from "@nextui-org/react";

interface OrderDetailsProps {
  order: {
    customerDetails: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      shippingAddress: string;
      deliveryDate: string;
      deliveryTime: string;
    };
    cart: Array<{
      productId: string;
      productName: string;
      productPrice: number;
      quantity: number;
    }>;
    deliveryPerson: string;
    status: string;
  };
  onClose: () => void;
}

const OrderDetails: React.FC<any> = ({ order, onClose }:any) => {
  // Verificar que order esté definido
  if (!order) {
    return <div>No se encontraron detalles del pedido</div>;
  }

  const { customerDetails, cart, deliveryPerson, status } = order;

  const total = cart.reduce(
    (acc:any, item:any) => acc + item.productPrice * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <button onClick={onClose} className="text-red-500">Cerrar</button>
      <h2 className="text-2xl font-bold mb-4">Detalles del Pedido</h2>
      
      <h3 className="text-xl font-semibold mb-2">Cliente</h3>
      <p>Nombre: {customerDetails.firstName} {customerDetails.lastName}</p>
      <p>Email: {customerDetails.email}</p>
      <p>Teléfono: {customerDetails.phone}</p>
      <p>Dirección de Envío: {customerDetails.shippingAddress}</p>
      <p>Fecha de Entrega: {customerDetails.deliveryDate}</p>
      <p>Hora de Entrega: {customerDetails.deliveryTime}</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Productos</h3>
      <Table aria-label="Detalles del Pedido">
        <TableHeader>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item:any) => (
            <TableRow key={item.productId}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>S/ {item.productPrice.toFixed(2)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>S/ {(item.productPrice * item.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between mt-4 font-bold">
        <p>Total del Pedido:</p>
        <p>S/ {total.toFixed(2)}</p>
      </div>

      <h3 className="text-xl font-semibold mt-4 mb-2">Repartidor</h3>
      <p>{deliveryPerson}</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Estado</h3>
      <p>{status}</p>
    </div>
  );
};

export default OrderDetails;
