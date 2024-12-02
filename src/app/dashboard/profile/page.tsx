"use client";
import { useAuth } from "@/app/context/auth-context";
import { getUserByToken } from "@/services/auth-services";
import { EditIcon } from "@/utils/icons/EditIcon";
import { Button, Chip, Input, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    documentType: "",
    documentNumber: "",
    birthDate: "",
    address: "",
    role: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const handleGetUser = async () => {
      try {
        setLoading(true);
        const response = await getUserByToken(token);
        console.log(response);
        if (response !== null) {
          const formattedBirthDate = response.birthDate
            .split("-")
            .reverse()
            .join("-");

          setFormData({
            firstName: response.firstName,
            lastName: response.lastName,
            username: response.username,
            documentType: response.documentType,
            documentNumber: response.documentNumber,
            birthDate: formattedBirthDate,
            address: response.address,
            role: response.role,
          });
        }
      } catch (error) {
        console.error("Error getting user:", error);
      } finally {
        setLoading(false);
      }
    };
    handleGetUser();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/auth/update/" + token, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Profile updated successfully");
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-[40%] flex flex-col items-center justify-center border-r-2 border-gray-300">
        <Image
          src="/batman.webp"
          alt="Profile"
          width={300}
          height={300}
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className="w-full flex items-center flex-col justify-center bg-gray-200">
        <div className="flex p-4 gap-x-4 w-full">
          <div className="flex items-center w-full gap-x-2">
            <Input
              placeholder="Nombre"
              label="Nombre"
              name="firstName"
              value={formData.firstName}
              disabled={!edit}
              onChange={handleInputChange}
            />
            <Chip color="secondary">{formData.role || "N/A"}</Chip>
          </div>
          <Input
            placeholder="Apellido"
            label="Apellido"
            name="lastName"
            disabled={!edit}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Email"
            label="Email"
            name="username"
            disabled={!edit}
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Tipo de Documento"
            label="Tipo de Documento"
            name="documentType"
            disabled={!edit}
            value={formData.documentType}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Número de Documento"
            label="Número de Documento"
            name="documentNumber"
            disabled={!edit}
            value={formData.documentNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex p-4 gap-x-4 w-full">
          <Input
            placeholder="Fecha de Nacimiento"
            label="Fecha de Nacimiento"
            name="birthDate"
            disabled={!edit}
            type="date"
            value={formData.birthDate}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Dirección"
            label="Dirección"
            name="address"
            disabled={!edit}
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-center p-4 gap-x-4">
          <Tooltip content={edit ? "Guardar" : "Editar"} placement="bottom">
            <Button
              variant="ghost"
              color={edit ? "success" : "secondary"}
              onClick={() => setEdit(!edit)}
              isIconOnly={edit}
            >
              {edit ? <BiSave /> : <EditIcon size={40} />}
            </Button>
          </Tooltip>
          {edit && (
            <Button
              variant="ghost"
              color="danger"
              onClick={() => setEdit(false)}
            >
              Cancelar
            </Button>
          )}
        </div>
        {edit && (
          <div className="flex justify-center mt-6">
            <Button onClick={handleSubmit}>Actualizar Perfil</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
