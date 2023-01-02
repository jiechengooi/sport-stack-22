import Link from "next/link";

import FadeIn from "./FadeIn";

export default function Info() {
  return (
    <div
      id="info"
      className="flex flex-col items-center justify-center px-4 py-8 m-6 text-gray-900 md:flex-row font-body"
    >
      <FadeIn>
        <div className="flex justify-center w-full py-4 md:w-3/4 ">
          <img
            src="/parkour4.jpg"
            alt="parkour"
            height={500}
            width={500}
          />
        </div>
      </FadeIn>

      <div className="flex flex-col items-center pb-8 pl-2 pr-12 md:w-1/2">
        <FadeIn>
          <h3 className="py-4 text-2xl font-extrabold text-green-500 lg:text-3xl ">
            Training Fees & details
          </h3>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
            We offer the open level and 3-level training to anyone interested. The course fee for open level is RM500 while the 3-level training is RM400 per level. 
          </p>
        </FadeIn>
        <FadeIn>
          <p className="mt-2 text-base lg:text-lg">
            <ul>
              <li>level 1 - course duration: 14 weeks, every Monday, 8-10pm</li>
              <li>level 2 - course duration: 14 weeks, every Tuesday, 8-10pm</li>
              <li>level 3 - course duration: 14 weeks, every Wednesday, 8-10pm</li>
              <li>Open level - course duration: 14 weeks, every Thurday, 8-10pm</li>
            </ul>
          </p>
          <p className="mt-2 text-base lg:text-lg">
            For every friday, our coach will have a group gathering with our program participant at our center. It's free for our alumni and present student as well.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
