"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";

const menu = [
  { path: "/service", label: "Service" },
  { path: "/ai-first-engineer", label: "AI First Engineer" },
  { path: "/why-codinism", label: "Why Codinism" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-12 py-4 border-t-4 border-primary border-b border-b-[#003570] ">
      {/* 
      desktop menu */}
      <div className="flex justify-between ">
        {/* Logo Left */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuLink href="/">
              <Image src="/logos/Logo.png" width={200} height={96} alt="Company logo" />
            </NavigationMenuLink>
          </NavigationMenu>
        </div>

        {/* Desktop Menu Center */}
        <div className="hidden md:block ">
          <NavigationMenu className="flex-1">
            <NavigationMenuList className="flex gap-6">
              {menu.map((m, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="text-[16px]" href={m.path}>
                    {m.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Button className="rounded-full h-12 w-40">Start a free trial</Button>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex justify-between items-center md:hidden w-full">
        {/* Hamburger Button */}
        <button
          className="p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">
                  <Image src="/logos/Logo.png" width={200} height={96} alt="Company logo" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Sliding Menu */}{" "}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#000102] z-50 flex flex-col justify-center items-center p-4 gap-4 md:hidden">
          {" "}
          <NavigationMenu className="w-full">
            {" "}
            <NavigationMenuList className="flex flex-col gap-4">
              {" "}
              {menu.map((m, index) => (
                <NavigationMenuItem key={index}>
                  {" "}
                  <NavigationMenuLink className="text-[16px]" href={m.path}>
                    {" "}
                    {m.label}{" "}
                  </NavigationMenuLink>{" "}
                </NavigationMenuItem>
              ))}{" "}
            </NavigationMenuList>{" "}
          </NavigationMenu>{" "}
          <Button className="rounded-full h-12 w-40">Start a free trial</Button>{" "}
        </div>
      )}
    </nav>
  );
}
