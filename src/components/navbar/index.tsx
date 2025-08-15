"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const items = ["About us", "Services", "Testimonials", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-colors",
        scrolled ? "bg-black text-white" : "bg-transparent text-white",
      )}
    >
      <Container className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="IntoHive logo" width={200} height={100} />
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {items.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-white hover:text-white focus:text-white font-bold text-lg px-8",
                  )}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </Container>
      {open && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col p-4 space-y-2">
            {items.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="block w-full py-2"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
