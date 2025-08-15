"use client";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "top-0 z-50 w-full transition-colors",
        scrolled ? "bg-black text-white sticky" : "bg-transparent text-black absolute",
      )}
    >
      <Container className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="IntoHive logo" width={200} height={100} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {items.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={navigationMenuTriggerStyle()}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </Container>
    </nav>
  );
}
