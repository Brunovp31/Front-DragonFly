"use client";

import Slider1 from "@/../public/slider1.webp";
import Slider2 from "@/../public/slider2.webp";
import Slider3 from "@/../public/slider3.webp";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./carousel.css";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 3000 })]
  );

  return (
    <section className="pt-10 embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide" key={1}>
            <img
              src="https://i.ytimg.com/vi/qd68NBQQeRs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggWChlMA8=&rs=AOn4CLBrdaXLjsF9oOyLUENmbIg4rj6Feg"
              alt="carousel"
              width={1200}
              className="rounded-lg"
            />
          </div>
          <div className="embla__slide" key={2}>
            <Image
              src={Slider2}
              alt="carousel"
              width={1200}
              className="rounded-lg"
            />
          </div>
          <div className="embla__slide" key={3}>
            <Image
              src={Slider3}
              alt="carousel"
              width={1200}
              className="rounded-lg"
            />
          </div>
          <div className="embla__slide" key={4}>
            <Image
              src={Slider1}
              alt="carousel"
              width={1200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
