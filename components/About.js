import Link from "next/link";

import FadeIn from "./FadeIn";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center px-4 py-8 m-6 text-gray-900 md:flex-row font-body"
    >
      <FadeIn>
        <div className="flex justify-center w-full py-4 md:w-3/4 ">
          <img
            src="/parkour2.jpg"
            alt="parkour"
            height={500}
            width={500}
          />
        </div>
      </FadeIn>

      <div className="flex flex-col items-center pb-8 pl-2 pr-12 md:w-1/2">
        <FadeIn>
          <h3 className="py-4 text-2xl font-extrabold text-green-500 lg:text-3xl ">
            History 
          </h3>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
          The Parkour adventure began in France in the 1990s, in Lisses and Evry, in the outskirts of Paris. David Belle originally developed the Parkour concept according to precepts about the art of movement laid down by his father, who was a Parisian firefighter.
          </p>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
          As teenagers, Belle and his friends from the Yamakasi group practised jumping and climbing over stairs, barriers, walls and other fixtures in his city. Doing so, he made up what they called the art of moving, taking advantage of all the constructions and obstacles that were not originally created for this purpose.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
