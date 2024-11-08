"use client";
import { useAuth } from "@/app/context/auth-context";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { EyeFilledIcon } from "../../../../public/svg/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../../public/svg/EyeSlashFilledIcon";
import { toast, Toaster } from "sonner";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loginAuth, error, clearError } = useAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await loginAuth(username, password);

    if (error) {
      toast.error(error);
    }
    setLoading(false);
  };

  return (
    <section className="flex min-h-screen">
      <Toaster richColors />
      <div className="hidden md:flex w-1/3 relative">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Catálogo de Aromaterapia Orgánica Minimalista Verde"
            layout="fill"
            objectFit="cover"
            className="cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center p-6 bg-gray-100">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-center text-gray-900 mb-6">
            Bienvenido a DragonFly
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                clearError();
              }}
              type="email"
              name="email"
              label="Correo Electrónico"
              variant="underlined"
              placeholder="Ingresa tu correo electrónico"
              isRequired
              errorMessage="Ingresa un correo válido"
              className="w-full"
            />
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError();
              }}
              name="password"
              label="Contraseña"
              variant="underlined"
              placeholder="Ingresa tu contraseña"
              isRequired
              errorMessage="Ingresa una contraseña válida"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-xl text-gray-600" />
                  ) : (
                    <EyeFilledIcon className="text-xl text-gray-600" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-full"
            />
            <div className="flex items-center justify-between">
              <Checkbox
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
              >
                <p className="text-sm text-gray-600">Recordar sesión</p>
              </Checkbox>
              <a
                href="#"
                className="text-sm font-medium text-pink-600 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <Button
                color="primary"
                type="submit"
                isLoading={loading}
                isDisabled={loading}
                className="bg-pink-500 hover:bg-pink-600"
              >
                Iniciar sesión
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              ¿Aún no tienes una cuenta?{" "}
              <Link
                href="/auth/register"
                className="text-pink-600 hover:underline"
              >
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
