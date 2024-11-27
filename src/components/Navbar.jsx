import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 } 
    )

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [])

  const handleMenuClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="flex justify-between items-center p-4 lg:px-12 relative text-white">
      {/* Logo */}
      <div>
        <img
          src="/logo.png"
          alt="Moonex"
          className="w-44 h-auto"
        />
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden z-50 p-2 absolute right-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoCloseSharp size={45} /> : <GiHamburgerMenu size={30} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex gap-12 items-center">
        <a
          href="#home"
          className={`font-extrabold text-lg text-[#F9D423] transition-colors`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`font-extrabold text-lg ${
            activeSection === "about" ? "text-[#F9D423]" : "hover:text-[#F9D423]"
          } transition-colors`}
        >
          About Us
        </a>
        <a
          href="#roadmap"
          className={`font-extrabold text-lg ${
            activeSection === "roadmap"
              ? "text-[#F9D423]"
              : "hover:text-[#F9D423]"
          } transition-colors`}
        >
          Roadmap
        </a>
        <a
          href="#faqs"
          className={`font-extrabold text-lg ${
            activeSection === "faqs" ? "text-[#F9D423]" : "hover:text-[#F9D423]"
          } transition-colors`}
        >
          FAQs
        </a>
        <a
          href="#contact"
          className={`font-extrabold text-lg ${
            activeSection === "contact"
              ? "text-[#F9D423]"
              : "hover:text-[#F9D423]"
          } transition-colors`}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#061724]/95 z-40 flex flex-col items-center justify-center gap-y-8 text-2xl font-bold transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#home"
          className={`text-[#F9D423]`}
          onClick={handleMenuClick}
        >
          Home
        </a>
        <a
          href="#about"
          className={`${
            activeSection === "about" ? "text-[#F9D423]" : "text-white"
          }`}
          onClick={handleMenuClick}
        >
          About Us
        </a>
        <a
          href="#roadmap"
          className={`${
            activeSection === "roadmap" ? "text-[#F9D423]" : "text-white"
          }`}
          onClick={handleMenuClick}
        >
          Roadmap
        </a>
        <a
          href="#faqs"
          className={`${
            activeSection === "faqs" ? "text-[#F9D423]" : "text-white"
          }`}
          onClick={handleMenuClick}
        >
          FAQs
        </a>
        <a
          href="#contact"
          className={`${
            activeSection === "contact" ? "text-[#F9D423]" : "text-white"
          }`}
          onClick={handleMenuClick}
        >
          Contact Us
        </a>
      </div>

      {/* Connect Wallet Button */}
      <div className="hidden lg:block">
        <Button label="Connect Wallet" type="filled" />
      </div>
    </nav>
  )
}
