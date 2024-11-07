"use client";
import { useCart } from "@/app/context/cart-context";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";

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
            <ModalHeader className="flex flex-col gap-1">
              {product.productName} - S/. {product.productPrice}
            </ModalHeader>
            <ModalBody>
              <div
                className="
                    flex flex-col gap-4
                    md:flex-row md:gap-8
                    items-center justify-center
                "
              >
                <div className="flex items-center justify-start w-1/2">
                  <img
                    src={product.image}
                    alt="Orquídea"
                    className="rounded-xl w-80 h-80 object-cover "
                  />
                </div>
                <div className="flex flex-col items-center gap-y-20 justify-center w-1/2">
                  <p className="text-sm">{product.productDescription}</p>
                  <Button
                    color="success"
                    endContent={<FaPlus />}
                    onClick={() => {
                      addToCart(product);
                      onClose();
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
