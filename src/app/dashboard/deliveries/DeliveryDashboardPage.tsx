// DeliveryDashboardPage.tsx
import React from "react";

// Componente DeliveryDashboardPage
const DeliveryDashboardPage: React.FC = () => {
  return (
    <div className="p-5 font-sans">
      <h2 className="text-xl font-bold mb-4">Dashboard de Entregas</h2>

      {/* Tabla de pedidos */}
      <div className="w-full mt-5 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead>
            <tr>
              <th className="p-3 bg-gray-100 text-left font-semibold text-gray-800 border-b">Nombre</th>
              <th className="p-3 bg-gray-100 text-left font-semibold text-gray-800 border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* Filas de pedidos */}
            <tr className="odd:bg-blue-50 even:bg-white hover:bg-blue-100">
              <td className="p-3 border-b cursor-pointer" data-status="En proceso">
                Pedido 1
              </td>
              <td className="p-3 border-b cursor-pointer text-orange-500" data-status="En proceso">
                En proceso
              </td>
            </tr>
            {/* Otros pedidos */}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h3 className="text-lg font-bold mb-4">Detalles del Pedido</h3>
          <div className="mb-4">
            <label className="block font-medium mb-2">Estado:</label>
            <select className="w-full p-2 text-sm border border-gray-300 rounded-md">
              <option>En proceso</option>
              <option>En camino</option>
              <option>Entregado</option>
              <option>Devuelto</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Guardar
            </button>
            <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboardPage;
