// DeliveryDashboardPage.tsx
import React from "react";
import styled from "styled-components";

// Contenedor principal
const DashboardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// Estilo de la tabla de pedidos
const TableContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
`;

const TableTh = styled.th`
  padding: 12px 15px;
  text-align: left;
  background-color: #f5f5f5;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

const TableTd = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &[data-status="En proceso"] {
    color: orange;
  }

  &[data-status="En camino"] {
    color: blue;
  }

  &[data-status="Entregado"] {
    color: green;
  }

  &[data-status="Devuelto"] {
    color: red;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:nth-child(odd) {
    background-color: #eaf4fc;
  }

  &:hover {
    background-color: #e1effd;
  }
`;

// Estilo del modal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ModalField = styled.div`
  margin-bottom: 15px;
`;

const ModalLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ModalSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button<{ primary?: boolean }>`
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props:any) => (props.primary ? "#007bff" : "#ddd")};
  color: ${(props:any) => (props.primary ? "white" : "#333")};
  border: none;
`;

// Componente DeliveryDashboardPage
const DeliveryDashboardPage: React.FC = () => {
  return (
    <DashboardContainer>
      <h2>Dashboard de Entregas</h2>

      {/* Aquí agregas tu tabla y modal */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableTh>Nombre</TableTh>
              <TableTh>Estado</TableTh>
            </tr>
          </thead>
          <tbody>
            {/* Aquí mapeas los pedidos */}
            <TableRow>
              <TableTd data-status="En proceso">Pedido 1</TableTd>
              <TableTd data-status="En proceso">En proceso</TableTd>
            </TableRow>
            {/* Otros pedidos */}
          </tbody>
        </Table>
      </TableContainer>

      <ModalContainer>
        <ModalContent>
          <ModalTitle>Detalles del Pedido</ModalTitle>
          <ModalField>
            <ModalLabel>Estado:</ModalLabel>
            <ModalSelect>
              <option>En proceso</option>
              <option>En camino</option>
              <option>Entregado</option>
              <option>Devuelto</option>
            </ModalSelect>
          </ModalField>
          <ModalButtons>
            <ModalButton primary>Guardar</ModalButton>
            <ModalButton>Cancelar</ModalButton>
          </ModalButtons>
        </ModalContent>
      </ModalContainer>
    </DashboardContainer>
  );
};

export default DeliveryDashboardPage;
