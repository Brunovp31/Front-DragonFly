"use client";
import { getCountUsers, getVentasSemana, getVentasMes, getVentasAnio } from "@/services/users-service"; // Asegúrate de tener estos métodos implementados para obtener datos dinámicos
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";  // Usando chart.js para gráficos
import * as XLSX from "xlsx"; // Importar la librería para generar el Excel
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [clientCount, setClientCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [ventasSemana, setVentasSemana] = useState(0);
  const [ventasMes, setVentasMes] = useState(0);
  const [ventasAnio, setVentasAnio] = useState(0);

  // Datos para el gráfico de ventas
  const [graficoVentas, setGraficoVentas] = useState({
    labels: [], // Etiquetas (fechas, semanas, etc.)
    datasets: [{
      label: 'Ventas',
      data: [],
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.1
    }]
  });

  useEffect(() => {
    // Obtener el conteo de usuarios
    const getUsersCountHandler = async () => {
      try {
        const response = await getCountUsers();
        const data = await response;
        setUserCount(data);
      } catch (error) {
        console.error("Error al obtener datos de usuario:", error);
      }
    };

    // Obtener las ventas de la semana, mes y año
    const getVentasData = async () => {
      try {
        const ventasSemana = await getVentasSemana();
        const ventasMes = await getVentasMes();
        const ventasAnio = await getVentasAnio();

        setVentasSemana(ventasSemana);
        setVentasMes(ventasMes);
        setVentasAnio(ventasAnio);

        // Generar gráfico dinámico
        setGraficoVentas({
          labels: ['Semana', 'Mes', 'Año'],
          datasets: [{
            label: 'Ventas',
            data: [ventasSemana, ventasMes, ventasAnio],
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
          }]
        });
      } catch (error) {
        console.error("Error al obtener datos de ventas:", error);
      }
    };

    getUsersCountHandler();
    getVentasData();

  }, []);

  // Función para descargar el reporte de ventas en Excel
  const descargarReporteVentas = () => {
    const ventasData = [
      { periodo: "Semana", ventas: ventasSemana },
      { periodo: "Mes", ventas: ventasMes },
      { periodo: "Año", ventas: ventasAnio }
    ];

    const ws = XLSX.utils.json_to_sheet(ventasData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reporte Ventas");

    // Generar el archivo Excel
    XLSX.writeFile(wb, "Reporte_Ventas.xlsx");
  };

  return (
    <motion.div
      className="p-6 bg-gray-100 min-h-screen w-[90%] mx-auto mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <motion.h1
            className="text-3xl font-bold text-gray-800"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Bienvenido a DragonFly
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            La mejor selección de anturios y orquídeas en Perú
          </motion.p>
        </div>
        <motion.img
          src="https://via.placeholder.com/150"
          alt="Flores decorativas"
          className="w-32 h-32 rounded-full shadow-lg object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Sección de métricas de ventas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div
          className="bg-blue-100 p-4 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold">Ventas esta Semana</h3>
          <p className="text-3xl font-bold text-blue-600">{ventasSemana}</p>
        </motion.div>
        <motion.div
          className="bg-green-100 p-4 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold">Ventas este Mes</h3>
          <p className="text-3xl font-bold text-green-600">{ventasMes}</p>
        </motion.div>
        <motion.div
          className="bg-yellow-100 p-4 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold">Ventas este Año</h3>
          <p className="text-3xl font-bold text-yellow-600">{ventasAnio}</p>
        </motion.div>
      </div>

      {/* Gráfico de ventas */}
      <div className="my-6">
        <h3 className="text-xl font-semibold mb-4">Gráfico de Ventas</h3>
        <Line data={graficoVentas} />
      </div>

      {/* Botón para descargar reporte de ventas */}
      <motion.button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-6"
        onClick={descargarReporteVentas}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Descargar Reporte de Ventas (Excel)
      </motion.button>
    </motion.div>
  );
}
