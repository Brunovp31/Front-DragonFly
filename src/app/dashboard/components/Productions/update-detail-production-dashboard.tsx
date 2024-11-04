import { getProductionById, updateProduction } from "@/services/production-service";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function UpdateProductionDashboard({
  id,
  open,
  type,
  onClose,
  handleReload,
}: {
  id: string;
  open: boolean;
  type: string;
  onClose: () => void;
  handleReload: () => void;
}) {
  const [production, setProduction] = useState({
    plantType: "",
    color: "",
    category: "",
    quantity: "",
    status: "",
    skuCode: ""
  });

  useEffect(() => {
    if (open) {
      const fetchProduction = async () => {
        try {
          const data = await getProductionById(id);
          setProduction(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProduction();
    }
  }, [open, id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProduction((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduction = async (e: any) => {
    e.preventDefault();
    const form = {
      plantType: production.plantType,
      color: production.color,
      category: production.category,
      quantity: production.quantity,
      status: production.status,
      skuCode: production.skuCode
    };
    try {
      await updateProduction(form, id);
      handleReload();
    } catch (error) {
      console.error("Error al actualizar la producción:", error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      <Modal
        isOpen={open}
        onOpenChange={(isOpen) => {
          if (!isOpen) onClose();
        }}
        size="3xl"
      >
        <ModalContent>
          {(closeModal) => (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (type === "update") {
                    handleUpdateProduction(e);
                  }
                  closeModal();
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  {type === "update" ? "Actualizar" : "Detalles de"} producción
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-wrap gap-4">
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="plantType"
                      label="Tipo de Planta"
                      isRequired
                      value={production.plantType}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="color"
                      label="Color"
                      isRequired
                      value={production.color}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="category"
                      label="Categoría"
                      isRequired
                      value={production.category}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="number"
                      name="quantity"
                      label="Cantidad"
                      isRequired
                      value={production.quantity}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="status"
                      label="Estado"
                      isRequired
                      value={production.status}
                      onChange={handleInputChange}
                    />
                    <Input
                      disabled={type === "details"}
                      type="text"
                      name="skuCode"
                      label="Código SKU"
                      isRequired
                      value={production.skuCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  {type === "update" && (
                    <Button color="success" type="submit">
                      Actualizar
                    </Button>
                  )}
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

