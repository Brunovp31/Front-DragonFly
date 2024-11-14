"use client";
import Map from "@/components/google-map";
import { getUserByToken } from "@/services/auth-services";
import { createOrder } from "@/services/order-service";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Select,
  SelectItem,

} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/cart-context";

const documentRules: any = {
  DNI: 8,
  RUC: 11,
  "Carnet de extranjería": 12,
  Pasaporte: 9,
};

const distritosLima = [
  "Barranco", "Breña", "Chorrillos", "Jesús María", 
  "La Molina", "Lima", "Lince","Magdalena del Mar", 
  "Miraflores","Pueblo Libre", "Rímac", "San Borja", 
  "San Isidro", "San Juan de Miraflores", "San Luis", 
  "San Martín de Porres", "San Miguel","Santiago de Surco", 
  "Surquillo"

];

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [loading, setLoading] = useState(true);
  const [preferenceId, setPreferenceId] = useState("");
  const navigate = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      navigate.push("/catalogo");
    }
  }, [cart]);

  useEffect(() => {
    const createOrderHandler = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const user = await getUserByToken(token);
        const orderCreated = await createOrder(user, cart);
        const preferenceId = orderCreated.preferenceId;
        setPreferenceId(preferenceId);
        initMercadoPago("TEST-f3f953fd-f6f8-46f0-b316-3436e6625f3d");
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    createOrderHandler();
  }, []);

  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    documentType: "",
    documentNumber: "",
    provincia: "Lima",
    distrito: "",
    shippingAddress: "",
    deliveryDate: "",
    deliveryTime: "",
    termsAccepted: false,
  });
  const [isValid, setIsValid] = useState(true);
  const [docError, setDocError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    documentNumber: false,
    deliveryDate: false,
    deliveryTime: false,
    documentType: false,
    termsAccepted: false,
    distrito: false,
  });

  const documentTypes = ["DNI", "RUC", "Carnet de extranjería", "Pasaporte"];
  const timeOptions = [
    "11:00 a 13:00", "12:00 a 14:00", "13:00 a 15:00", "14:00 a 16:00", 
    "15:00 a 17:00", "16:00 a 18:00", "17:00 a 19:00", "18:00 a 20:00"];

  const total = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );
  const igvPercentage = 0.18;
  const subtotal = total / (1 + igvPercentage);
  const igv = total - subtotal;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "documentNumber") {
      const docType = customerDetails.documentType;
      const maxLength = documentRules[docType];
      if (value.length > maxLength) return;
      setDocError(
        value.length !== maxLength ? `Debe tener ${maxLength} caracteres` : ""
          
      );
    }

    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setFieldErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        !value && (name !== "documentNumber" || customerDetails.documentType),
    }));
  };

  const handleDocumentTypeChange = (value: string) => {
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      documentType: String(value),
      documentNumber: "",
    }));
    setDocError("");
  };

  const handleDistritoChange = (value: string) => {
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      distrito: value,
    }));
    // Aquí se debe centrar el mapa en el distrito seleccionado
    // Actualiza la posición del mapa según sea necesario
  };

  const handleProceedToPayment = () => {
   
    window.open("https://mpago.la/2k1anq8", "_self");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Información del Cliente</h2>
          <form className="flex flex-col gap-6">
            <div className="flex items-center gap-x-2 justify-between">
              <Input
                label="Nombres"
                name="firstName"
                value={customerDetails.firstName}
                onChange={handleInputChange}
                required
                className={fieldErrors.firstName ? "border-red-500" : ""}
              />
              <Input
                label="Apellidos"
                name="lastName"
                value={customerDetails.lastName}
                onChange={handleInputChange}
                required
                className={fieldErrors.lastName ? "border-red-500" : ""}
              />
            </div>

            <div className="flex items-center gap-x-2 justify-between">
              <Input
                label="Correo Electrónico"
                name="email"
                value={customerDetails.email}
                onChange={handleInputChange}
                required
                className={fieldErrors.email ? "border-red-500" : ""}
              />
              <Input
                label="Número de Teléfono"
                name="phone"
                value={customerDetails.phone}
                onChange={handleInputChange}
                required
                className={fieldErrors.phone ? "border-red-500" : ""}
              />
            </div>
            <div className="flex items-center gap-x-2 justify-between">
              <Select
                label="Tipo de Documento"
                value={customerDetails.documentType}
                onChange={(e) => handleDocumentTypeChange(e)}
                required
                className={fieldErrors.documentType ? "border-red-500" : ""}
              >
                <SelectItem key="" value="">
                  Seleccionar...
                </SelectItem>
                {documentTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </Select>
              <Input
                label="Número de Documento"
                name="documentNumber"
                value={customerDetails.documentNumber}
                onChange={handleInputChange}
                required
                className={fieldErrors.documentNumber ? "border-red-500" : ""}
              />
              {docError && <p className="text-red-500">{docError}</p>}
            </div>

            <h2 className="text-2xl font-bold mb-4">Datos de envío</h2>
            <div className="flex items-center gap-x-2 justify-between">
              <Select
                label="Distrito"
                name="distrito"
                value={customerDetails.distrito}
                onChange={(e) => handleDistritoChange(e)}
                required
                className={fieldErrors.distrito ? "border-red-500" : ""}
              >
                <SelectItem key="" value="">
                  Seleccionar...
                </SelectItem>
                {distritosLima.map((distrito) => (
                  <SelectItem key={distrito} value={distrito}>
                    {distrito}
                  </SelectItem>
                ))}
              </Select>
              <Input
                type="date"
                label="Fecha de Entrega"
                name="deliveryDate"
                value={customerDetails.deliveryDate}
                onChange={handleInputChange}
                required
                className={fieldErrors.deliveryDate ? "border-red-500" : ""}
              />
              <Select
                label="Rango de Hora"
                name="deliveryTime"
                value={customerDetails.deliveryTime}
                onChange={handleInputChange}
                required
                className={fieldErrors.deliveryTime ? "border-red-500" : ""}
              >
                <SelectItem key="" value="">
                  Seleccionar...
                </SelectItem>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Input
              label="Instrucciones de Entrega"
              name="shippingAddress"
              value={customerDetails.shippingAddress}
              onChange={handleInputChange}
              required
              className={fieldErrors.shippingAddress ? "border-red-500" : ""}
            />
          
          </form>
          <div className="flex items-center gap-x-2 justify-between">
  <input
    type="checkbox"
    name="termsAccepted"
    checked={customerDetails.termsAccepted}
    onChange={(e) =>
      setCustomerDetails((prevDetails) => ({
        ...prevDetails,
        termsAccepted: e.target.checked,
      }))
    }
  />
  <label htmlFor="terms">
    Acepto los{" "}
    <a href="/terminos-condiciones" className="text-blue-500">
      términos y condiciones
    </a>
  </label>
</div>
{!customerDetails.termsAccepted && (
  <p className="text-red-500 text-sm">Debe aceptar los términos y condiciones.</p>
)}
        </div>
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Resumen de la Orden</h2>
          <Table>
            <TableHeader>
              <TableColumn>Producto</TableColumn>
              <TableColumn>Precio</TableColumn>
              <TableColumn>Cantidad</TableColumn>
              <TableColumn>Total</TableColumn>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>S/ {item.productPrice.toFixed(2)}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.productId, Number(e.target.value))
                      }
                    />
                  </TableCell>
                  <TableCell>
                    S/ {(item.productPrice * item.quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between mt-4">
            <p>Subtotal:</p>
            <p>S/ {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>IGV (18%):</p>
            <p>S/ {igv.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total:</p>
            <p>S/ {total.toFixed(2)}</p>
          </div>
          <Wallet initialization={{ preferenceId }} />
          {loading && <FlowerSpinner />}
        </div>
        
      </div>
      <Map />
    </div>
  );
}