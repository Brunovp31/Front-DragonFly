"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import ProductModal from "./product-modal";

export default function ProductCard({
  id,
  image,
  hoverImage,
  productName,
  productDescription,
  productPrice,
}: {
  image: string;
  hoverImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  id: any;
}) {
  const [currentImage, setCurrentImage] = useState(image);
  const product = {
    id,
    image,
    hoverImage,
    productName,
    productDescription,
    productPrice,
  };

  return (
    <Card className="py-4 shadow-lg transition-transform transform hover:scale-105">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-sm text-gray-600 font-medium">{productDescription}</p>
        <div className="flex justify-between items-center w-full">
          <h4 className="font-semibold text-lg text-gray-800">{productName}</h4>
          <small className="text-xl text-gray-900 font-bold">S/.{productPrice}</small>
        </div>
      </CardHeader>
      <div
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(image)}
      >
        <CardBody className="overflow-visible py-4 flex items-center cursor-pointer relative">
          <ProductModal product={product}>
            <div className="w-full h-[200px] flex justify-center items-center rounded-lg overflow-hidden">
              <img
                alt="Card background"
                className="object-cover rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
                src={currentImage}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="absolute top-2 right-2 text-white bg-blue-500 p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
              <i className="fas fa-cart-plus"></i> {/* Icono de ejemplo */}
            </div>
          </ProductModal>
        </CardBody>
      </div>
      <div className="w-full flex items-center justify-center"></div>
    </Card>
  );
}
