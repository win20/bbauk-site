"use client";

import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Events", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Donations", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-capecod shadow-md" : "bg-capecod"
      }`}
    >
      {/* Navigation bar */}
      <div
        className={`relative flex items-center justify-between px-6 py-5 text-foreground-inverse transition-all duration-500 ease-out ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-2 opacity-85"
        }`}
      >
        {/* Animated bottom line */}
        <div
          className={`absolute bottom-0 left-0 h-px bg-white/10 ${
            isScrolled ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
          style={{
            transition:
              "width 500ms cubic-bezier(0.4,0,0.2,1), opacity 300ms cubic-bezier(0.4,0,0.2,1)",
            transitionDelay: "0ms, 0ms",
          }}
        />

        <span className="font-poppins text-sm leading-none font-extrabold tracking-wide md:pl-20">
          Bangladesh Buddhist Association UK
        </span>

        <button
          className="text-3xl focus:outline-none md:pr-20 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <div className="relative h-6 w-6">
            <MdMenu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                open ? "scale-75 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-100"
              }`}
            />
            <MdClose
              size={24}
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                open ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-180 opacity-0"
              }`}
            />
          </div>
        </button>

        {/* Desktop nav */}
        {/*<nav className="ml-8 hidden gap-8 sm:flex">*/}
        {/*  {navLinks.map((link) => (*/}
        {/*    <a*/}
        {/*      key={link.label}*/}
        {/*      href={link.href}*/}
        {/*      className="text-base font-[var(--font-pt-sans)] text-[var(--color-text-inverse)] hover:underline"*/}
        {/*    >*/}
        {/*      {link.label}*/}
        {/*    </a>*/}
        {/*  ))}*/}
        {/*</nav>*/}
      </div>

      {/* Mobile dropdown nav */}
      <nav
        className={`absolute top-full right-0 left-0 z-50 flex flex-col bg-capecod pb-8 text-foreground-inverse shadow-lg transition-all duration-300 ease-in-out md:px-20 md:pb-16 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-8 px-6 pt-8">
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className={`transition-all duration-300 ease-in-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
              }}
            >
              <a
                href={link.href}
                className="font-pt-sans text-base hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
