import { CheckCircleIcon } from "@heroicons/react/outline";
import FadeIn from "./FadeIn";

const features = [
  {
    name: "Level 1",
    description:
      "Building off of the fundamentals learned in Intro to Parkour, Parkour 1 will refine the basics and teach new applications and techniques. This class will focus on building movement comfort with ground level obstacles, as well as improving movement comprehension for Parkour 2.",
    icon: CheckCircleIcon,
    id: 11,
  },
  {
    name: "Level 2",
    description:
      "Level 2 is where students will move past the basics and start exploring more challenging applications of the movements they’ve learned. Students will begin to explore the mental game of Parkour as they approach ever increasing challenges at ground and at height.  Participation in these classes is not possible without PRIOR staff approval.  Students may test into Level 2 during any Open Gym.",
    icon: CheckCircleIcon,
    id: 12,
  },

  {
    name: "Level 3",
    description:
      "Students in this class have learned and refined the basics of Parkour. In level 3, students work on advanced applications and challenges to explore the more technical side of Parkour. Students will work on abstract applications of movement to challenge them both mentally and physically. Students may test into Level 3 during any Open Gym. ",
    icon: CheckCircleIcon,
    id: 13,
  },
  {
    name: "Open level",
    description:
      "This is a required series of four classes for all NEW students. You can test out of Intro to Parkour during any open gym. Intro to Parkour teaches the fundamentals of Parkour to prepare students for regular classes. Students must have taken all four intro classes before moving on to Parkour 1.  All four classes can be taken in one week, or finished over the course of a few weeks or months. Sessions do not need to be attended in order.",
    icon: CheckCircleIcon,
    id: 14,
  },
];

export default function Service() {
  return (
    <div id="services" className="py-16 my-6 text-gray-900 bg-white">
      <div className="px-8 mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center">
            <p className="mt-4 text-2xl font-extrabold text-green-500 lg:text-3xl font-body ">
              What does parkour mean?
            </p>
          </div>
          <div className="text-left">
            <p className="max-w-2xl mt-4 text-lg font-semibold lg:mx-auto">
              Parkour, the practice of traversing obstacles in a man-made or natural environment through the use of running, vaulting, jumping, climbing, rolling, and other movements in order to travel from one point to another in the quickest and most efficient way possible without the use of equipment.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, id) => (
              <FadeIn>
                <div key={feature.id} className="relative">
                  <div>
                    <div className="absolute flex items-center justify-center text-green-500 rounded-md">
                      <feature.icon className="w-12 h-12" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-bold">{feature.name}</p>
                  </div>
                  <p className="mt-2 ml-16 text-base ">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
