"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const target = 1245;
    const duration = 2000;
    const increment = target / (duration / 10);

    const interval = setInterval(() => {
      setClientCount((prev) => {
        if (prev + increment >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);
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
          src="https://www.disfrazzes.com/blog/wp-content/uploads/2016/01/disfraz-del-negro-del-whatsapp-880x660.jpg"
          alt="Flores decorativas"
          className="w-32 h-32 rounded-full shadow-lg object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="bg-white shadow-md rounded-lg p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2
              className="text-xl font-semibold text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Clientes Actuales
            </motion.h2>
            <motion.p
              className="text-4xl font-bold text-blue-600"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {Math.floor(clientCount).toLocaleString()}
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.h2
            className="text-xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Productos
          </motion.h2>
          <motion.p
            className="text-2xl font-bold"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Anturios y Orquídeas
          </motion.p>
        </motion.div>
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.h2
            className="text-xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Nuevas Consultas
          </motion.h2>
          <motion.p
            className="text-4xl font-bold text-red-600"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            0
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="bg-white shadow-md rounded-lg p-6 mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Últimos Productos
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.img
            src="https://elcronista.co/assets/media/el-negro-del-whatsapp-montaje-o-realidad.jpg"
            alt="Anturio"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhZO2pLTsLmHVkqH3cZFwuq_ljbLbroDX1g&s"
            alt="Orquídea"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWM0Sd1s7zKZNDkr59XNirT-puYVg9HtaG_Q&s"
            alt="Flor variada"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://i.ytimg.com/vi/qd68NBQQeRs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggWChlMA8=&rs=AOn4CLBrdaXLjsF9oOyLUENmbIg4rj6Feg"
            alt="Tienda de flores"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
