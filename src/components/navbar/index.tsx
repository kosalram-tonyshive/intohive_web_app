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
  const [active, setActive] = useState<string | null>(null);
  const INDICATOR_WIDTH = 24;
  const [indicatorLeft, setIndicatorLeft] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-colors",
        scrolled
          ? "bg-[var(--header-footer-bg)] text-[var(--header-footer-text)]"
          : "bg-transparent text-[var(--header-footer-text)]",
      )}
    >
      <Container className="flex items-center justify-between p-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="IntoHive logo" width={200} height={100} />
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="relative">
            {items.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => {
                    setActive(item);
                    const target = e.currentTarget as HTMLAnchorElement;
                    setIndicatorLeft(
                      target.offsetLeft + target.offsetWidth / 2 - INDICATOR_WIDTH / 2,
                    );
                  }}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-[var(--header-footer-text)] hover:text-[var(--header-footer-text)] focus:text-[var(--header-footer-text)] font-bold text-lg px-8",
                  )}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {indicatorLeft !== null && (
              <span
                className="absolute -bottom-1 h-0.5 w-6 bg-[var(--header-footer-text)] transition-all duration-300"
                style={{ left: indicatorLeft }}
              />
            )}
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
        <div className="md:hidden bg-[var(--header-footer-bg)] text-[var(--header-footer-text)]">
          <ul className="flex flex-col p-4 space-y-2">
            {items.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => {
                    setOpen(false);
                    setActive(item);
                  }}
                  className={cn(
                    "block w-full py-2 relative",
                    active === item &&
                      "after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-6 after:-translate-x-1/2 after:bg-[var(--header-footer-text)]",
                  )}
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
