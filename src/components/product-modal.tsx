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
                      <strong>Categoría:</strong> {product.Category|| "N/A"}
                    </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClipboardList />
                    <span>
                      <strong>Detalles:</strong> {product.details || "No especificado"}
                      {product.details || "No especificado"}
                    </span>
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    Precio: <span style={{ color: "#a5003c" }}>S/. {product.productPrice}</span>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFElEQVR4nO1YTYxURRCurkYJomKMB0i84In4c/GoR38OJiIQ54TJMlXjJCIrgomnNXhaE49wFUkUD3Dy5NWEwAK7VbOY7J978++gHkxg1bgxrKn3+i3L+Ob9zWNGk/clnUxed1fN1/XbDdCgQYMGDRoMgcsEDwm7s8L4mzJu3PNB+KuQOzPTgh1QJ4Td2ZEQ6BvC7nTNRDCyhByBZ2AEmGP/UkwEf6lVsIYTqlXoOHRqQaHShft6Hf+6sjuvhMvCuCaEt+y3fbM5W1OnzlIoIrTX8a8J42q+3+Oqra1DZ2lkCd04BajkPtr8o4QL0sZ35zvw1I03YKcN+62MJ4RxMZC5reSmbW8VnZWRJTQhIYx/KeOxiy3wg+TYnDC+o4TrcZp103k6hfGnXCsT/qzsLkgX9lUiEtzptpHotf2LRfdFWYlwPbaM35+ls2T9+V3Zv1qKiAXtlpg4VuYAov2Ex5OYSUsAdyziW3lyZ9vwhJD7Mnz/c47h+cJE4uwUx8Qgd8oi8vUp2CaESzZvssrs1ZS5yG3JfRoO50fpwmOFNiq5LwKR41UDVglPxjLc58MSSQ5HCS+FruCrDQAHuUQYV6LTbMOTdy3O2bcVswRPhzUrZfZqxtw3HXjcerWw5v0iRG7aN2so0wQawTwitjesuVkXEcMc+1fiRILrvTfhOahKRBgnrKoHf12EERMxKLuPQyb7bobh0VzXsmKXfJMuPKDszt1Jie6cFUQYoWv1ZdWZEC+fZRBx58P3E5ub2beCFdbMKpADYXyvzmDvx40O7FXGP6JadwSezU6/jItb06+y+zArAfRlmOW60u8g2J0mWOWT3IJobQeUhFmySEEcsPf7QcXyX2vJv5DoyW1RLDtY21GUhJB/uWiLkrqf8YMKLczfeU3jdMgO61YczWUy3cksUaJpTJu72AKvhFNC+EMZMkXa+OnodEPMWMW2jLRwFB60Yb8tsJOWZNRtvBYhsrmY/P6iF6tB7vSfIJJ61SW8FcaSpdhxXXW1LJE6MTYiq5Ow3dKwEM5GF5x4XFfCSZurrLwGXVqUiHRhjxDOZ8RGz9bUQUQq6CpEZKEF9yeCLWNZbbFmMHpmJX8gqd7KqLZ2GCJVdWkRInbNjfslXJIu7Eo5wV2JAiE8OgyRqro0kZW8ZKTdhZMOM+utStr+YBB+ZRgiVXRJaGStrdl88skagy5YhmuH4eEKLUW9uginIt80MllvTFnCI5OPiIj06YraGMKprPe2eGNyeSF/YNAaZX+orGuNXJd08O1guuW0AJyfgEeE8NuQad6qyOHe61owt2PsBVOuWLCZn8a+6g8lgpVQyqTfseiSLuzZoiBt6PUJ2D0MiZHpWp2E7SHPXwt39jUlvGruMKwlxqmrQYMG8P/DPzBJ5bs/B/OtAAAAAElFTkSuQmCC" alt="Envíos a Domicilio" className="h-5 w-5" />
                  <div className="text-xs text-gray-800 font-semibold">Envíos a Domicilio</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-4">
                  <img src="data:image/png;base64,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" alt="Envíos a Domicilio" className="h-5 w-5" />
                  <div className="text-xs text-gray-800 font-semibold">Compras 100% seguras</div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 flex items-center space-x-2">
                <span className="text-xs text-gray-800 font-semibold">Síguenos en:</span>
                <a href="https://www.instagram.com/detalles_dragonfly?igsh=MWxnYWJ3N3F2ZWwycA==" target="_blank" rel="noopener noreferrer">
                  <img src="data:image/png;base64,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"  alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/share/18CJ9hxyyx/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg==" alt="Facebook" className="h-6 w-6" />
                </a>
              </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="w-full flex flex-col md:flex-row justify-end items-center gap-8">
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
 