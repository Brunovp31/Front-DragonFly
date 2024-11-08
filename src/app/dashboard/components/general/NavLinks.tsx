"use client";

import { useAuth } from "@/app/context/auth-context";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrUserWorker } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdDeliveryDining, MdProductionQuantityLimits } from "react-icons/md";
import { RiOrderPlayLine } from "react-icons/ri";
import { RxActivityLog, RxDashboard, RxPerson } from "react-icons/rx";
import { motion } from "framer-motion";

const permitAll = ["ADMIN", "WORKER", "DELIVERY", "GARDENER"];
const links = [
  {
    name: "Home",
    href: "/",
    icon: IoHomeOutline,
    bg: "bg-purple-500",
    permit: permitAll,
  },
  {
    name: "Productos",
    href: "/dashboard/products",
    icon: RxDashboard,
    permit: ["ADMIN", "WORKER"],
  },
  {
    name: "Categorias",
    href: "/dashboard/categories",
    icon: RxActivityLog,
    permit: ["ADMIN", "WORKER"],
  },
  {
    name: "Usuarios",
    href: "/dashboard/users",
    icon: RxPerson,
    permit: ["ADMIN"],
  },
  {
    name: "Trabajadores",
    href: "/dashboard/workers",
    icon: GrUserWorker,
    permit: ["ADMIN"],
  },
  {
    name: "Producciones",
    href: "/dashboard/productions",
    icon: MdProductionQuantityLimits,
    permit: ["GARDENER", "ADMIN"],
  },
  {
    name: "Entregas",
    href: "/dashboard/deliveries",
    icon: MdDeliveryDining,
    permit: ["DELIVERY", "ADMIN"],
  },
  {
    name: "Pedidos",
    href: "/dashboard/orders",
    icon: RiOrderPlayLine,
    permit: ["ADMIN", "WORKER"],
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { user } = useAuth();
  const roles = user?.role.map((r: any) => r.authority) || [];

  return (
    <>
      {links
        .filter((link) => link.permit.some((role) => roles.includes(role)))
        .map((link) => {
          const LinkIcon = link.icon;
          const isHome = link.name === "Home";
          const isSelected = pathname === link.href;

          return (
            <Tooltip
              key={link.name}
              content={link.name}
              placement="right"
              color="foreground"
            >
              <Link href={link.href} passHref>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex h-[48px] items-center justify-center gap-2 rounded-lg bg-gray-100 cursor-pointer my-4 p-3 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors duration-500 ${
                    isHome ? link.bg : ""
                  } ${isHome ? "text-white" : ""} ${
                    isSelected && !isHome ? "bg-gray-300" : ""
                  } ${!isSelected ? "hover:bg-gray-400" : ""} ${
                    isHome && !isSelected ? "hover:bg-purple-700" : ""
                  }`}
                >
                  <LinkIcon size={20} />
                </motion.div>
              </Link>
            </Tooltip>
          );
        })}
    </>
  );
}
