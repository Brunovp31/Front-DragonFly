"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import React, { useEffect } from "react";
import Image from "next/image";
import { getTop4Products } from "@/services/product-service";

export default function NewProducts() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const data = await getTop4Products();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewProducts();
  }, []);
  const list = [
    {
      title: "Orange",
      img: "/Orquidea.webp",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/Orquidea.webp",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/Orquidea.webp",
      price: "$10.00",
    },
    {
      title: "Raspberry",
      img: "/Orquidea.webp",
      price: "$10.00",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col w-full gap-y-6">
      <div className="flex items-center w-full px-20">
        <hr className="w-full" />
        <h2 className="font-bold text-center w-1/2">Nuevos productos</h2>
        <hr className="w-full" />
      </div>
      <div className="flex justify-between">
        <Image
          src="/novedades.webp"
          alt="Orquidea"
          width={400}
          height={300}
          className="border-2 border-gray-200 rounded-md shadow-sm"
        />
        <div className="h-full w-1/2 gap-2 grid grid-cols-2 sm:grid-cols-2">
          {data.map((item: any, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-5">
                <img
                  alt={item.name}
                  className="object-cover shadow-sm rounded-t-md h-36 w-48 "
                  src={item.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.name}</b>
                <p className="text-default-500">S/.{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
