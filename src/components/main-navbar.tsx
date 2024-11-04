import { useAuth } from "@/app/context/auth-context";
import { useCart } from "@/app/context/cart-context";
import { CartIcon } from "@/utils/icons/CartIcon";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";
import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiExit, BiUser } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Logo from "../../public/LOGO-LETRA.png";

export default function NavbarCustom({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout, user } = useAuth();
  const path = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, clearCart } = useCart();

  const items = [
    { label: "Home", href: "/" },
    { label: "Productos", href: "/catalogo" },
    { label: "Cuidados", href: "/cuidado-planta" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
  ];

  const badgeTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarBrand className="max-sm:hidden pb-2">
          <Link href={"/"}>
            <Image
              alt="Logo"
              src={Logo}
              height={130}
              width={130}
              className=""
            />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center" className="max-sm:hidden">
          {items.map((item, index) => (
            <NavbarItem key={`${item}-${index}`} isActive={path === item.href}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        {!user ? (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="warning"
                href="/auth/register"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem>
              <Dropdown className="select-none">
                <DropdownTrigger>
                  <Button variant="light">
                    <Badge
                      color="danger"
                      content={badgeTotal}
                      shape="circle"
                      size="sm"
                    >
                      <CartIcon size={25} />
                    </Badge>
                  </Button>
                </DropdownTrigger>

                <DropdownMenu>
                  <DropdownItem
                    key="shopping-cart"
                    onClick={() => router.push("/shopping-cart")}
                  >
                    {cart.length === 0 ? (
                      <p>No hay productos en el carrito</p>
                    ) : (
                      <table>
                        <tbody>
                          {cart.map((item: any) => (
                            <tr
                              key={item.id}
                              className="flex items-center gap-x-4 my-2"
                            >
                              <td>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  width={40}
                                  height={40}
                                />
                              </td>
                              <td>
                                <p>
                                  {item.productName} ({item.quantity})
                                </p>
                                <p>{item.productPrice}</p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    <hr className="mt-4" />
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    color="danger"
                    startContent={<DeleteIcon className="text-xl" />}
                    onClick={() => clearCart()}
                  >
                    Eliminar
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem className="flex items-center gap-x-2 cursor-pointer">
              <Dropdown>
                <DropdownTrigger>
                  <User
                    name={user.fullName}
                    description={user.sub}
                    avatarProps={{
                      src: "/batman.webp",
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    key="profile"
                    onClick={() => router.push("/dashboard/profile")}
                  >
                    <div className="flex items-center gap-x-2">
                      <BiUser
                        className="cursor-pointer text-blue-500"
                        size={20}
                      />
                      Perfil
                    </div>
                  </DropdownItem>
                  {user.role.some((r: any) => r.authority != "USER") && (
                    <DropdownItem
                      key="dashboard"
                      onClick={() => router.push("/dashboard/")}
                    >
                      <div className="flex items-center gap-x-2">
                        <RxDashboard
                          className="cursor-pointer text-green-500"
                          size={20}
                        />
                        Dashboard
                      </div>
                    </DropdownItem>
                  )}
                  <DropdownItem key="logout" onClick={() => logout()}>
                    <div className="flex items-center gap-x-2">
                      <BiExit
                        className="cursor-pointer text-red-500"
                        size={20}
                      />
                      Cerrar sesión
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarMenu>
          {items.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={path === item.href}
            >
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="pt-10">{children}</div>
    </>
  );
}
