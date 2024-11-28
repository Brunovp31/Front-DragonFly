"use client";
import { useCart } from "@/app/context/cart-context";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FaPlus, FaTags, FaBox, FaClipboardList } from "react-icons/fa";

export default function ProductModal({
  children,
  product,
}: {
  children: React.ReactNode;
  product: any;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { addToCart } = useCart();

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        className="w-full max-w-3xl"
      >
        <ModalContent>
          <>
            <ModalHeader className="text-center flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-gray-800">
                {product.productName}
              </h2>
              <p className="text-sm text-gray-500">{product.productDescription}</p>
            </ModalHeader>
            <ModalBody>
              <div
                className="flex flex-col md:flex-row gap-8 items-center justify-center"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="rounded-xl w-80 h-80 object-cover shadow-md"
                  />
                </div>
                {/* Details Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaTags />
                    <span>
                      <strong>Categoría:</strong> {product.productCategory || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaBox />
                    <span>
                      <strong>Stock:</strong> {product.stock} unidades
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClipboardList />
                    <span>
                      <strong>Detalles:</strong> {product.details || "No especificado"}
                    </span>
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    Precio: <span className="text-green-500">S/. {product.productPrice}</span>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                <Button
                  color="danger"
                  onClick={onClose}
                  className="w-full md:w-auto"
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  endContent={<FaPlus />}
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="w-full md:w-auto"
                >
                  Agregar al carrito
                </Button>
              </div>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
