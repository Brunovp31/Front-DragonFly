// page.tsx

"use client";

import React, { useState } from 'react';
import DeliveryTable from './DeliveryTable';
import DeliveryStatusModal from './DeliveryStatusModal';
import { EstadoPedido } from './DeliveryStatus';

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

const Page: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState<Pedido | null>(null);

  const handleRowClick = (pedido: Pedido) => {
    setSelectedPedido(pedido);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPedido(null);
  };

  const handleStatusSave = (newStatus: EstadoPedido, justification: string) => {
    if (selectedPedido) {
      selectedPedido.estado = newStatus;
      console.log('Justificación:', justification);
    }
    handleModalClose();
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard de Repartidor</h2>
      <DeliveryTable pedidos={pedidosData} onSelectPedido={handleRowClick} />
      {selectedPedido && (
        <DeliveryStatusModal
          isOpen={modalOpen}
          currentStatus={selectedPedido.estado}
          onClose={handleModalClose}
          onSave={handleStatusSave}
        />
      )}
    </div>
  );
};

export default Page;
