"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HamburgerMenu from "./hamburger-menu";

interface NavBarProps {
    title: string;
}

export default function NavBar({ title }: NavBarProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]);
    return (
      <nav className="border-b-2 border-white py-4 px-8 flex justify-between">
        <div className="flex flex-col text-right">
            <h2 className="text-xl">Data Doodle</h2>
            <small className="text-xs">&nbsp;By Chrismo</small>
        </div>
        <h1 className="text-4xl">{title}</h1>
        <div className="flex justify-between min-w-12">
            <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
        </div>
      </nav>
    );
  }
  