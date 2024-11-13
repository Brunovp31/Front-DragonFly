// page.tsx

"use client";

import React, { useState } from 'react';
import DeliveryTable from './DeliveryTable';
import DeliveryStatusModal from './DeliveryStatusModal';
import { EstadoPedido } from './DeliveryStatus';
import OrderDetails from "@/components/OrderDetails"


interface Pedido {
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  tipoDocumento: string;
  direccion: string;
  pedido: string;
  estado: EstadoPedido;
}

const pedidosData: Pedido[] = [
  { nombre: 'Marco', apellido: 'Yataco', telefono: '999888777', documento: '76799829', tipoDocumento: 'DNI', direccion: 'Brisas de villa', pedido: 'Flores amarillas', estado: 'En proceso' },
  { nombre: 'Jane', apellido: 'Smith', telefono: '888777666', documento: '87654321', tipoDocumento: 'Passport', direccion: '456 Oak Rd', pedido: 'Lilies arrangement', estado: 'En camino' },
  { nombre: 'Francis', apellido: 'Vinco', telefono: '777666555', documento: '13579086', tipoDocumento: 'DNI', direccion: 'Tupac Amaru', pedido: 'Sunflower basket', estado: 'Entregado' },
];

const DeliveryDashboard: React.FC = () => {
  const [selectedPedido, setSelectedPedido] = useState([]as any)

  const handleOrderClick = (pedido: Pedido) => {
    setSelectedPedido(pedido);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard de Entregas</h2>
      <DeliveryTable pedidos={pedidosData} onSelectPedido={()=>handleOrderClick} />
      
      {selectedPedido && (
        <OrderDetails
          orderId={selectedPedido.documento} // Assuming documento is unique for each pedido
          products={[selectedPedido.pedido]} // Adjust this if you have a more complex product structure
          customerName={`${selectedPedido.nombre} ${selectedPedido.apellido}`}
          deliveryAddress={selectedPedido.direccion}
          deliveryPerson="Repartidor asignado" // Replace with actual delivery person data if available
          // Include any other props needed by OrderDetails
        />
      )}
    </div>
  );
};

export default DeliveryDashboard;
