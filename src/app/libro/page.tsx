"use client";

import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const LibroReclamaciones = () => {
  const [dateTime, setDateTime] = useState("");
  const [isMinor, setIsMinor] = useState(false);
  const [departamento, setDepartamento] = useState("");
  const [provincia, setProvincia] = useState("");
  const [provincias, setProvincias] = useState<string[]>([]);
  const [distritos, setDistritos] = useState<string[]>([]);

  const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDepartamento = e.target.value;
    setDepartamento(selectedDepartamento);

    switch (selectedDepartamento) {
      case "Amazonas":
        setProvincias(["Provincia 1", "Provincia 2"]);
        break;
      case "Ancash":
        setProvincias(["Provincia 3"]);
        break;
      default:
        setProvincias([]);
    }
    setProvincia("");
    setDistritos([]);
  };

  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvincia = e.target.value;
    setProvincia(selectedProvincia);

    switch (selectedProvincia) {
      case "Provincia 1":
        setDistritos(["Distrito 1", "Distrito 2"]);
        break;
      case "Provincia 2":
        setDistritos(["Distrito 3", "Distrito 4"]);
        break;
      case "Provincia 3":
        setDistritos(["Distrito 5", "Distrito 6"]);
        break;
      default:
        setDistritos([]);
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("es-PE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setDateTime(formattedDateTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            LIBRO DE RECLAMACIONES
          </h2>
          <p className="text-gray-500">Fecha y hora: {dateTime}</p>
          <br></br>
        </div>
        </form>
        <div className="text-xs">
        <p className="book_p">Agradecemos su interes en comunicarse con Florería DragonFly. Conforme a lo establecido en código de la Protección y Defensa del consumidor contamos con un Libro de Reclamaciones a tu disposición para que puedas registrar tu queja o reclamo.</p>
		<br></br>
    <h3 className="book_h3 font-semibold">Por favor ingrese los datos solicitados.</h3>
    <br></br>
        </div>
        <form id="formSubmit" method="post" action="">
        <div className="grid grid-cols-1 gap-4">
          <Select placeholder="Tienda" required aria-label="Tienda">
            <SelectItem key="tiendaVirtual">Tienda Virtual</SelectItem>
            </Select>
          <Input placeholder="Razón Social" required />
          <Input placeholder="RUC" required />
          <Input placeholder="Dirección" required />
        </div>
        <div>
          <br></br>
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            DATOS DEL CONSUMIDOR
          <br></br>
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select placeholder="Tipo de documento" required aria-label="Tipo de documento">
              <SelectItem key="dni">DNI</SelectItem>
              <SelectItem key="pasaporte">Pasaporte</SelectItem>
              <SelectItem key="carne">Carné de extranjería</SelectItem>
              <SelectItem key="ruc">RUC</SelectItem>
            </Select>
            <Input placeholder="Documento de identidad" required />
            <Input
              placeholder="Nombre y apellidos del cliente"
              required
              className="md:col-span-2"
            />
            <Input placeholder="Domicilio" required className="md:col-span-2" />
            <Select placeholder="Departamento" required aria-label="Departamento" onChange={handleDepartamentoChange}>
              <SelectItem key="amazonas" value="Amazonas">Amazonas</SelectItem>
              <SelectItem key="ancash" value="Ancash">Áncash</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Select placeholder="Provincia" required aria-label="Provincia" onChange={handleProvinciaChange} value={provincia}>
              {provincias.map((prov, index) => (
                <SelectItem key={index} value={prov}>{prov}</SelectItem>
              ))}
            </Select>
            <Select placeholder="Distrito" required aria-label="Distrito" value={distritos}>
              {distritos.map((dist, index) => (
                <SelectItem key={index} value={dist}>{dist}</SelectItem>
              ))}
            </Select>
            <Input placeholder="Correo electrónico" type="email" required />
            <Input placeholder="Teléfono fijo (opcional)" />
            <Input placeholder="Teléfono celular" required />
          </div>
          <br>
          </br>
          <Checkbox onChange={(e) => setIsMinor(e.target.checked)}>
            <p className="text-s">El cliente es menor de edad</p>
          </Checkbox>
        </div>
        {isMinor && (
          <div className="grid grid-cols-1 gap-4">
            <br></br>
            <h3 className="text-lg font-semibold mb-2 text-red-500">
              SOLO COMPLETAR EN CASO DE SER MENOR DE EDAD
            </h3>
            <Select placeholder="Tipo de documento" required aria-label="Tipo de documento">
              <SelectItem key="dni">DNI</SelectItem>
              <SelectItem key="pasaporte">Pasaporte</SelectItem>
              <SelectItem key="carne">Carné de extranjería</SelectItem>
            </Select>
            <Input
              placeholder="Número de documento del padre, madre o apoderado"
              required
            />
            <Input
              placeholder="Nombre y apellidos del padre, madre o apoderado"
              required
            />
            <Input
              placeholder="Correo electrónico del padre, madre o apoderado"
              type="email"
              required
            />
            <Input
              placeholder="Teléfono celular del padre, madre o apoderado"
              required
            />
          </div>
        )}
        <div>
          <br></br>
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            DETALLE
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <Select placeholder="Motivo" required aria-label="Motivo">
              <SelectItem key="queja">Queja</SelectItem>
              <SelectItem key="reclamo">Reclamo</SelectItem>
            </Select>
            <div className="info">
                <p className="text-xs"><strong>Queja:</strong> Descontento respecto a la atención al publico o Disconformidad no relacionada a los productos o servicios.</p>
                <p className="text-xs"><strong>Reclamo:</strong> Disconformidad relacionada a los productos o servicios.</p>
                </div>
            <Textarea placeholder="Detalle de la reclamación" required />
          </div>
        </div>
        <div>
          <br></br>
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            INFORMACIÓN ADICIONAL
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select placeholder="Tipo de bien" required aria-label="Tipo de bien">
              <SelectItem key="producto">Producto</SelectItem>
              <SelectItem key="servicio">Servicio</SelectItem>
            </Select>
            <Select placeholder="Canal de pedido" required aria-label="Canal de pedido">
              <SelectItem key="online">Online</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Input type="date" placeholder="Fecha de pedido" required />
            <Input type="date" placeholder="Fecha de reclamo" required />
            <Input type="number" placeholder="Monto reclamado" required />
            <Textarea
              placeholder="Pedido del cliente"
              required
              className="md:col-span-2"
            />
          </div>
        </div>
        <div>
          <br></br>
          <Checkbox>
            Declaro haber leído y aceptado las políticas de privacidad.
          </Checkbox>
        </div>
        <div className="text-center">
          <br></br>
          <Button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LibroReclamaciones;