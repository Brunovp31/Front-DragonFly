import { createProduction } from "@/services/production-service";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function CreateProductionDashboard({
  handleReload,
}: {
  handleReload: () => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleCreateProduction = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      plantType: form.get("plantType"),
      color: form.get("color"),
      category: form.get("category"),
      quantity: form.get("quantity"),
      status: form.get("status"),
      skuCode: form.get("skuCode"),
    };

    await createProduction(data);
    handleReload();
  };

  return (
    <>
      <Button onPress={onOpen} color="success" className="text-white">
        Crear producción
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <form
                onSubmit={(e) => {
                  handleCreateProduction(e);
                  onClose();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Crear producción
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-wrap gap-4">
                    <Input
                      type="text"
                      name="plantType"
                      label="Tipo de Planta"
                      isRequired
                    />
                    <Input
                      type="text"
                      name="color"
                      label="Color"
                      isRequired
                    />
                    <Input
                      type="text"
                      name="category"
                      label="Categoría"
                      isRequired
                    />
                    <Input
                      type="number"
                      name="quantity"
                      label="Cantidad"
                      isRequired
                    />
                    <Input
                      type="text"
                      name="status"
                      label="Estado"
                      isRequired
                    />
                    <Input
                      type="text"
                      name="skuCode"
                      label="Código SKU"
                      isRequired
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    Crear producción
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}



