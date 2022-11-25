import FadeIn from "./FadeIn";
import Dots from "./Dots";

export default function ContactUs() {
  return (
    <div id="contact">
      <div className="container pt-16 mx-auto font-semibold text-gray-900 font-body"></div>
      <div className="w-full py-16 bg-gray-100 ">
        <div className="container relative mx-auto">
          <div className="absolute top-0 -mt-16">
            <Dots />
          </div>
          <div className="absolute bottom-0 right-0 -mb-16">
            <Dots />
          </div>

          <div className="relative w-11/12 p-20 mx-auto bg-white sm:px-16">
            <div className="flex items-center pb-8">
              <div className="flex flex-col md:flex-row">
                <FadeIn>
                  <h1 className="mb-4 text-2xl font-extrabold text-green-500 lg:text-4xl md:text-center md:text-3xl">
                    Get In Touch
                  </h1>
                </FadeIn>

                <div className="py-4 lg:pl-28 xl:pl-44 md:pl-6 sm:pl-6 ">
                  <FadeIn>
                    <p className="text-lg font-bold">PHONE</p>
                    <p className="text-base ">+60123456789</p>
                    <button className="px-6 py-4 mt-4 text-lg font-semibold text-white transition duration-100 ease-in-out transform bg-green-500 border-2 border-green-500 rounded-full shadow-lg hover:text-green-500 hover:bg-transparent ">
                      <a href="tel:+1-613-883-6232">CALL NOW</a>
                    </button>
                  </FadeIn>
                </div>
                <div className="py-4 xl:pl-44 lg:pl-32 md:pl-4 sm:pl-6 ">
                  <FadeIn>
                    <p className="text-lg font-bold">EMAIL</p>
                    <p className="text-base ">info@gmail.com</p>
                    <button className="px-6 py-4 mt-4 text-lg font-semibold text-white transition duration-100 ease-in-out transform bg-green-500 border-2 border-green-500 rounded-full shadow-lg hover:text-green-500 hover:bg-transparent ">
                      <a href="mailto:kaarinaddewan@gmail.com">EMAIL NOW</a>
                    </button>
                  </FadeIn>
                </div>
              </div>
            </div>
            <div className="flex items-center pb-8">
              <div className="flex flex-col md:flex-row">
                <div className="py-6 lg:pl-28 xl:pl-44 md:pl-6 sm:pl-6 ">
                  <FadeIn>
                    <p className="text-lg font-bold">Address</p>
                    <p className="text-base ">Happy town, Pulau Pinang, Malaysia</p>
                  </FadeIn>
                </div>
                <div className="py-6 xl:pl-44 lg:pl-32 md:pl-6 sm:pl-6 ">
                  <FadeIn>
                  <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=usm&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
