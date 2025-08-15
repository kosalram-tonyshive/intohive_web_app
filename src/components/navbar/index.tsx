"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const items = ["About us", "Services", "Testimonials", "Contact"];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 bg-transparent">
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
    </nav>
  );
}
