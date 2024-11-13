// DeliveryStatusModal.tsx

import React, { useState, useEffect } from 'react';
import './DeliveryDashboardPage.tsx';

interface DeliveryStatusModalProps {
  isOpen: boolean;
  currentStatus: string;
  onClose: () => void;
  onSave: (newStatus: string, justification: string, image?: File | null) => void;
}

const DeliveryStatusModal: React.FC<DeliveryStatusModalProps> = ({ isOpen, currentStatus, onClose, onSave }) => {
  const [newStatus, setNewStatus] = useState(currentStatus);
  const [justification, setJustification] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    // Reset justification and image when the modal opens
    setJustification('');
    setImage(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleSave = () => {
    if ((newStatus === 'Entregado' || newStatus === 'Devuelto') && justification.trim() === '') {
      alert('Por favor, añade una justificación.');
      return;
    }
    onSave(newStatus, justification, newStatus === 'Entregado' ? image : null);
  };

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
            <option value="Devuelto">Devuelto</option>
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
        {newStatus === 'Entregado' && (
          <div className="modal-field">
            <label className="modal-label" htmlFor="image">Cargar Imagen:</label>
            <input
              type="file"
              id="image"
              className="modal-input"
              onChange={handleImageChange}
            />
          </div>
        )}
        <div className="modal-buttons">
          <button className="modal-button save" onClick={handleSave}>
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
