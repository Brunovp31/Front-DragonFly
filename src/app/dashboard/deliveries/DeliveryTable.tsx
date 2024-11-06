// DeliveryTable.tsx

import React from 'react';
import './DeliveryDashboardPage.css';

interface Pedido {
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  tipoDocumento: string;
  direccion: string;
  pedido: string;
  estado: string;
}

interface DeliveryTableProps {
  pedidos: Pedido[];
  onSelectPedido: (pedido: Pedido) => void;
}

const DeliveryTable: React.FC<DeliveryTableProps> = ({ pedidos, onSelectPedido }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Documento</th>
            <th>Tipo de Documento</th>
            <th>Dirección</th>
            <th>Pedido</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={index} onClick={() => onSelectPedido(pedido)}>
              <td>{pedido.nombre}</td>
              <td>{pedido.apellido}</td>
              <td>{pedido.telefono}</td>
              <td>{pedido.documento}</td>
              <td>{pedido.tipoDocumento}</td>
              <td>{pedido.direccion}</td>
              <td>{pedido.pedido}</td>
              <td>{pedido.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryTable;
