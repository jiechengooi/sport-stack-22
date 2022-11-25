import Link from "next/link";

import Nav from "../components/Nav";
import About from "../components/About";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Head from "../components/Head";

export default function Home() {
  return (
    <>
      <Head />
      <Nav />
      <Header />

      <Service />
      <Testimonials />
      <About />

      <ContactUs />
      <Footer />
    </>
  );
}
