"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--header-footer-bg)] text-[var(--header-footer-text)]">
      <Container className="px-6 py-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Row 1: logo and contact */}
          <div className="col-span-8">
            <div className="overflow-hidden rounded-md border border-white/10">
              {/* Inner Grid */}
              <div className="grid gap-10 grid-cols-8">
                {/* Row 1: Logo and Contact */}
                <div className="flex items-center justify-between col-span-8 px-6 pt-6 md:px-8">
                  <div>
                    <Image
                      src="/logo-mark.svg"
                      alt="IntoHive logo"
                      width={180}
                      height={60}
                      priority
                    />
                  </div>
                  <div className="flex items-start gap-6 md:items-end">
                    <ul className="text-sm text-foreground flex flex-row gap-10">
                      <li className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hive-500/20">
                          <Phone className="h-4 w-4 text-hive-500" />
                        </span>
                        <span className="text-md font-semibold">+91 789 789 5027</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hive-500/20">
                          <Mail className="h-4 w-4 text-hive-500" />
                        </span>
                        <span className="text-md font-semibold">info@intohive.in</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Row 2: Address Blocks */}
                <div className="grid col-span-8 grid-cols-1 text-sm md:grid-cols-3">
                  <div className="space-y-2 border-t border-white/10 p-6 md:p-8">
                    <h4 className="font-semibold">Chennai</h4>
                    <p className="text-white/80">
                      Nest Vibrant, Sowmya Nagar,
                      <br />
                      Perumbakkam – 600100
                    </p>
                  </div>
                  <div className="space-y-2 border-t border-white/10 p-6 md:border-l md:p-8">
                    <h4 className="font-semibold">Coimbatore</h4>
                    <p className="text-white/80">
                      Rani Maigai, Near Rajalakshmi Mills,
                      <br />
                      Kalimadai – 641005
                    </p>
                  </div>
                  <div className="space-y-2 border-t border-white/10 p-6 md:border-l md:p-8">
                    <h4 className="font-semibold">Erode</h4>
                    <p className="text-white/80">
                      NPS Anbu Nagar, Nanjundapuram,
                      <br />
                      Industrial Estate – 638104
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 col-span-4">
            <div className="flex flex-col gap-10 col-span-4 mt-4">
              <Link
                href="#"
                className="rounded-full border items-center flex justify-center w-64 h-16 border-[var(--header-footer-text)] px-2 py-4 text-center text-sm font-medium text-[var(--header-footer-text)] transition-colors hover:bg-[var(--header-footer-text)] hover:text-[var(--header-footer-bg)]"
              >
                <span className="font-bold text-lg">Book a Consultation</span>
              </Link>
              <div>
                <p className="mb-3 text-sm font-medium">Connect With Us</p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Twitter"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/60">
          ©{year} IntoHive. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
