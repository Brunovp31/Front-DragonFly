// DeliveryStatusModal.tsx

import React, { useState } from 'react';
import './DeliveryDashboardPage.css';

interface DeliveryStatusModalProps {
  isOpen: boolean;
  currentStatus: string;
  onClose: () => void;
  onSave: (newStatus: string, justification: string) => void;
}

const DeliveryStatusModal: React.FC<DeliveryStatusModalProps> = ({ isOpen, currentStatus, onClose, onSave }) => {
  const [newStatus, setNewStatus] = useState(currentStatus);
  const [justification, setJustification] = useState('');

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h3 className="modal-title">Cambiar Estado del Pedido</h3>
        <div className="modal-field">
          <label className="modal-label" htmlFor="status">Nuevo Estado:</label>
          <select
            id="status"
            className="modal-select"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="En proceso">En proceso</option>
            <option value="En camino">En camino</option>
            <option value="Entregado">Entregado</option>
            <option value="Devuelto">Devuelto</option> {/* Estado añadido */}
          </select>
        </div>
        <div className="modal-field">
          <label className="modal-label" htmlFor="justification">Justificación:</label>
          <textarea
            id="justification"
            className="modal-input"
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            placeholder="Escribe la justificación"
          />
        </div>
        <div className="modal-buttons">
          <button className="modal-button save" onClick={() => onSave(newStatus, justification)}>
            Guardar
          </button>
          <button className="modal-button cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatusModal;
