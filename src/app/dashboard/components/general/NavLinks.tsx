"use client";

import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrUserWorker } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdDeliveryDining, MdProductionQuantityLimits } from "react-icons/md";
import { RiOrderPlayLine } from "react-icons/ri";
import { RxActivityLog, RxDashboard, RxPerson } from "react-icons/rx";

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
    name: "Products",
    href: "/dashboard/products",
    icon: RxDashboard,
    permit: ["ADMIN", "WORKER"],
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
    icon: RxActivityLog,
    permit: ["ADMIN", "WORKER"],
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: RxPerson,
    permit: ["ADMIN"],
  },
  {
    name: "Workers",
    href: "/dashboard/workers",
    icon: GrUserWorker,
    permit: ["ADMIN"],
  },
  {
    name: "Productions",
    href: "/dashboard/productions",
    icon: MdProductionQuantityLimits,
    permit: ["GARDENER", "ADMIN"],
  },
  {
    name: "Deliveries",
    href: "/dashboard/deliveries",
    icon: MdDeliveryDining,
    permit: ["DELIVERY", "ADMIN"],
  },
  {
    name: "Orders",
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
        .filter((link) => link.permit.some((role) => roles.includes(role))) // Filtra enlaces según los permisos del usuario
        .map((link) => {
          const LinkIcon = link.icon;
          const isHome = link.name === "Home";
          const isSelected = pathname === link.href;

          return (
            <Link key={link.name} href={link.href} passHref>
              <div
                className={`flex h-[48px] items-center justify-center gap-2 rounded-lg bg-gray-100 cursor-pointer my-4 p-3 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors duration-500 ${
                  isHome ? link.bg : ""
                } ${isHome ? "text-white" : ""} ${
                  isSelected && !isHome ? "bg-gray-300" : ""
                } ${!isSelected ? "hover:bg-gray-400" : ""} ${
                  isHome && !isSelected ? "hover:bg-purple-700" : ""
                }`}
              >
                <LinkIcon size={20} />
              </div>
            </Link>
          );
        })}
    </>
  );
}
