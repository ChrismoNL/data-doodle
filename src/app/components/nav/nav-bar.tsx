"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenu from "./hamburger-menu";
import Head from "next/head";
import Link from "next/link";

interface NavBarProps {
  title?: string;
}

const defaultTitle = "Data Doodle by Chrismo";

export default function NavBar({ title }: Readonly<NavBarProps>) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      </Head>
      <nav className="border-b-2 border-white py-4 px-8 flex justify-between">
        <Link href="/">
          <div
            className={`flex-col text-right ${
              title ? "hidden md:flex" : "flex"
            }`}
          >
            <h2 className="text-xl">Data Doodle</h2>
            <small className="text-xs">&nbsp;By Chrismo</small>
          </div>
        </Link>
        {title && <h1 className="text-4xl">{title}</h1>}
        <div className="flex justify-between min-w-12">
          <HamburgerMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </nav>
    </>
  );
}
