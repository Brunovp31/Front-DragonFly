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
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-sm">{productName}</h4>
        <p className="text-tiny uppercase font-bold">{productDescription}</p>
        <small className="text-default-500">S/.{productPrice}</small>
      </CardHeader>
      <div
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(image)}
      >
        <CardBody className="overflow-visible py-2 flex items-center cursor-pointer">
          <ProductModal product={product}>
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src={currentImage}
              width={300}
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
          </ProductModal>
        </CardBody>
      </div>
      <div className="w-full flex items-center justify-center"></div>
    </Card>
  );
}
