import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Spin as Hamburger } from "hamburger-react";

const links = [
  { name: "Services", to: "#services", id: 1 },
  { name: "Testimonials", to: "#testimonials", id: 2 },
  { name: "About", to: "#about", id: 3 },
  { name: "Contact", to: "#contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="fixed z-50 flex justify-between w-full font-semibold text-white bg-green-500 shadow-md font-body">
      <div className="inline-flex px-4 py-6 text-3xl font-display md:pl-12 lg:pl-16">
        <a href="#">Parkour</a>
      </div>

      {/* The Side Bar Menu for screens smaller than 'Large' */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed right-0 h-screen mt-20 bg-green-500 lg:hidden"
            initial={{ width: 0 }}
            animate={{
              width: "100%",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.15 },
            }}
          >
            <motion.div
              className="flex flex-col p-2 pl-12 ml-4 text-2xl tracking-wider md:ml-24 md:text-4xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="flex flex-row pb-32 md:pb-40"></div>
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  className="flex my-6 transition duration-100 ease-in-out transform hover:scale-105"
                  variants={itemVariants}
                  aria-current={links.current ? "page" : undefined}
                  onClick={cycleOpen}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* The Hamburger Menu and Close Icons */}
      <div className="flex justify-end lg:hidden ">
        <button className="px-2 m-2 cursor-pointer ">
          <span className="sr-only">Open main menu</span>
          <Hamburger toggled={open} toggle={cycleOpen} />
        </button>
      </div>

      {/* The Navbar on large screens */}
      <div className="hidden pr-8 tracking-wider lg:inline-flex">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="px-8 py-6 mt-1 text-xl font-medium transition duration-100 ease-in-out transform 2xl:text-xl hover:scale-105"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
