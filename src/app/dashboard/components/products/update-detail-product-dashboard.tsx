import { getAllCategories } from "@/services/categories-service";
import { getProductById, updateProduct } from "@/services/product-service";
import FlowerSpinner from "@/utils/icons/FlowerSpinner";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function UpdateDetailProduct({
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
  const [product, setProduct] = useState({} as any);
  const [categories, setCategories] = useState([] as any);
  const [categoryId, setCategoryId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (open) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const productData = await getProductById(id);
          setProduct(productData);
          setCategoryId(productData.category.id);

          const categoriesData = await getAllCategories();
          setCategories(categoriesData);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [open, id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProduct((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (selectedKey: any) => {
    setCategoryId(selectedKey);
    setProduct((prev: any) => ({ ...prev, category: { id: selectedKey } }));
  };

  const handleUpdateProduct = async (e: any) => {
    e.preventDefault();
    try {
      await updateProduct({ ...product, category: { id: categoryId } }, id);
      handleReload();
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      {/* Loader en pantalla completa */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <FlowerSpinner />
        </div>
      )}

      {/* Modal que solo se abre cuando isLoading es false */}
      {!isLoading && (
        <Modal
          isOpen={open}
          onOpenChange={(isOpen) => {
            if (!isOpen) onClose();
          }}
          size="3xl"
        >
          <ModalContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (type === "update") {
                  handleUpdateProduct(e);
                }
              }}
            >
              <ModalHeader className="flex flex-col gap-1">
                {type === "update" ? "Actualizar" : "Detalles de "} producto
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-x-2">
                  <Input
                    isDisabled={type === "details"}
                    type="text"
                    name="name"
                    label="Nombre"
                    isRequired
                    value={product.name || ""}
                    onChange={handleInputChange}
                  />
                  <Input
                    isDisabled={type === "details"}
                    type="textarea"
                    name="description"
                    label="Descripción"
                    isRequired
                    value={product.description || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-x-2">
                  <Input
                    isDisabled={type === "details"}
                    label="Precio"
                    name="price"
                    placeholder="0.00"
                    type="number"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                    isRequired
                    value={product.price || ""}
                    onChange={handleInputChange}
                  />
                  <Input
                    isDisabled={type === "details"}
                    label="Stock"
                    name="stock"
                    type="number"
                    placeholder="0"
                    isRequired
                    value={product.stock || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-x-2">
                  <Select
                    isDisabled={type === "details"}
                    label="Categoría"
                    selectedKeys={categoryId ? [categoryId] : []}
                    onSelectionChange={handleCategoryChange}
                    name="category"
                    isRequired
                  >
                    {categories.map((category: any) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    isDisabled={type === "details"}
                    label="Color"
                    name="color"
                    placeholder="Ejemplo: Verde"
                    isRequired
                    value={product.color || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <Input
                  isDisabled={type === "details"}
                  label="Tipo de planta"
                  name="plantType"
                  placeholder="Ejemplo: Suculenta"
                  isRequired
                  value={product.plantType || ""}
                  onChange={handleInputChange}
                />
                <Input
                  isDisabled={type === "details"}
                  label="Descuento"
                  name="discount"
                  placeholder="0.00"
                  type="number"
                  isRequired
                  value={product.discount || ""}
                  onChange={handleInputChange}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">%</span>
                    </div>
                  }
                />
                <Input
                  isDisabled
                  label="SKU"
                  name="sku"
                  placeholder="Ejemplo: 123456"
                  description="El SKU es un código único para cada producto. Autogenerado."
                  isReadOnly
                  defaultValue={product.sku || ""}
                />
                <Input
                  isDisabled={type === "details"}
                  name="image"
                  description={
                    type === "details"
                      ? "Imagen de producto"
                      : "Selecciona una imagen para tu producto."
                  }
                  value={product.image || ""}
                  onChange={handleInputChange}
                />
                <Input
                  isDisabled={type === "details"}
                  name="imageHover"
                  description={
                    type === "details"
                      ? "Imagen de hover"
                      : "Selecciona una imagen para tu producto."
                  }
                  value={product.imageHover || ""}
                  onChange={handleInputChange}
                />
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
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
