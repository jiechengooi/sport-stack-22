import Link from "next/link";

import FadeIn from "./FadeIn";

export default function Event() {
  return (
    <div
      id="info"
      className="flex flex-col items-center justify-center px-4 py-8 m-6 text-gray-900 md:flex-row font-body"
    >
      <FadeIn>
        <div className="flex justify-center w-full py-4 md:w-3/4 ">
          <img
            src="/parkour5.jpg"
            alt="parkour"
            height={500}
            width={500}
          />
        </div>
      </FadeIn>

      <div className="flex flex-col items-center pb-8 pl-2 pr-12 md:w-1/2">
        <FadeIn>
          <h3 className="py-4 text-2xl font-extrabold text-green-500 lg:text-3xl ">
            Latest event
          </h3>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
            We gold a convocation at root top of a historical building in old venice city. Approximately 36 candidates have participated in the convocation ceremony. 16 candicates for level 1; 10 candidates for level 2; 7 candidates for level 3; and 3 candidates for open level.   
          </p>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
            The whole ceremony was conducted in wonderful atmosphere. Our faculty head in the faculty of Parkour science, Prof Dr. Halim shah , have awarded the candidates the graduation scroll on that day. The whole session was witnessed by family member of gradudation candidates. Estimated total 350 family members and friend have attended the ceremony.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
