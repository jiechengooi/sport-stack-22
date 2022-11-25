import React, { useState } from "react";
import FadeIn from "./FadeIn";
import Dots from "./Dots";

export default function Testimonials() {
  const [change, setChange] = useState(false);

  return (
    <section id="testimonials">
      <div className="container pt-16 mx-auto text-gray-900"></div>
      <div className="w-full py-16 bg-gray-100">
        <div className="container relative mx-auto">
          <div className="absolute top-0 -mt-16">
            <Dots />
          </div>
          <div className="absolute bottom-0 right-0 -mb-16">
            <Dots />
          </div>

          <section id="carousel">
            <figure className={change ? "hidden" : "block"}>
              <div className="relative w-11/12 px-10 py-10 mx-auto bg-white sm:px-16">
                <FadeIn>
                  <h1 className="mb-6 text-2xl font-extrabold text-center text-green-500 font-body lg:text-3xl ">
                    HEAR FROM OUR CLIENTS
                  </h1>
                </FadeIn>

                <div className="flex items-center justify-between pb-8">
                  <FadeIn>
                    <div className="items-center xl:flex md:flex lg:flex sm:flex">
                      <img
                        src="/lildog2.jpg"
                        alt="Charlie the dog"
                        className="object-cover w-20 h-20 rounded-full "
                      />

                      <div className="pt-4 xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 font-display">
                        <p className="text-xl font-bold ">Christianne S.</p>
                        <p className="text-sm sm:text-xl">Pup To Pal Client</p>
                      </div>
                    </div>
                  </FadeIn>
                  <svg
                    width={85}
                    height={65}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <text
                      transform="rotate(-180 475.5 56.5)"
                      fill="#EDF2F7"
                      fillRule="evenodd"
                      fontFamily="ProximaNova-Extrabld, Proxima Nova"
                      fontSize={200}
                      fontWeight={600}
                      letterSpacing="1.667"
                    >
                      <tspan x={860} y={184}>
                        “
                      </tspan>
                    </text>
                  </svg>
                </div>
                <FadeIn>
                  <p className="w-full pb-6 sm:w-10/12 lg:text-lg">
                    Pup To Pal dog training has been incredible. My only regret
                    is not calling Kaarina sooner. Only 4 sessions in and
                    Kaarina has given me the confidence and knowledge to train
                    our little Charlie so our whole family is happier. The fact
                    that she's also trained our 6-year-old daughter how to
                    manage Charlie's puppy energy is beyond life-changing.
                    Before this, our daughter was heart-broken because of
                    Charlie's excited behaviour and the nipping that came with
                    it was frightening and overwhelming to her. I look forward
                    to each session because I know I'll come away with more
                    know-how and Charlie and our family will be better for it.
                    Thank you Kaarina! Our experience has already far surpassed
                    our expectations!
                  </p>
                </FadeIn>

                {/* <img
                    src="https://cdn.tuk.dev/assets/Path-right-arrow.png"
                    alt="arrow"
                    className="absolute right-0 mr-16 cursor-pointer sm:-mt-6"
                    onClick={() => setChange(!change)}
                  /> */}
              </div>
            </figure>
            {/* <figure className={change ? "block" : "hidden"}>
                <div className="relative w-11/12 px-10 py-10 mx-auto bg-white sm:px-16">
                  <h1 className="mb-6 text-2xl font-extrabold text-center text-green-500 font-display xl:text-3xl ">
                    HEAR FROM OUR CLIENTS
                  </h1>
                  <div className="flex items-center justify-between pb-8">
                    <div className="items-center xl:flex md:flex lg:flex sm:flex">
                      <div className="w-20 h-20">
                        <img
                          src=""
                          alt=""
                          className="object-cover w-full h-full rounded-full shadow"
                        />
                      </div>
                      <div className="pt-4 xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0">
                        <p className="text-xl font-bold text-gray-600">
                          THIS IS WHERE ANOTHER
                        </p>
                        <p className="text-sm text-gray-600 sm:text-xl">
                          TESTIMONIAL WILL GO
                        </p>
                      </div>
                    </div>
                    <svg
                      width={85}
                      height={65}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <text
                        transform="rotate(-180 475.5 56.5)"
                        fill="#EDF2F7"
                        fillRule="evenodd"
                        fontFamily="ProximaNova-Extrabld, Proxima Nova"
                        fontSize={200}
                        fontWeight={600}
                        letterSpacing="1.667"
                      >
                        <tspan x={860} y={184}>
                          “
                        </tspan>
                      </text>
                    </svg>
                  </div>
                  <p className="w-full pb-6 text-base text-gray-600 sm:w-10/12">
                    All the good stuff to be said goes here.
                  </p>
                  <p className="w-full text-base text-gray-600 sm:w-10/12">
                    And some more good stuff here.
                  </p>
                  <img
                    src="https://cdn.tuk.dev/assets/Path-right-arrow.png"
                    alt="arrow"
                    className="absolute right-0 mr-16 cursor-pointer sm:-mt-6"
                    onClick={() => setChange(!change)}
                  />
                </div>
              </figure> */}
          </section>
        </div>
      </div>
    </section>
  );
}
