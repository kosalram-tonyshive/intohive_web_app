"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--header-footer-bg)] text-[var(--header-footer-text)]">
      <div className="mx-auto container px-4 py-16 md:px-8">
        <div className="grid gap-10">
          {/* Row 1: logo and contact */}
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Image src="/logo-mark.svg" alt="IntoHive logo" width={180} height={60} priority />
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hive-500/20">
                    <Phone className="h-4 w-4 text-hive-500" />
                  </span>
                  <span>+91 789 789 5027</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hive-500/20">
                    <Mail className="h-4 w-4 text-hive-500" />
                  </span>
                  <span>info@intohive.in</span>
                </li>
              </ul>
              <Link
                href="#"
                className="rounded-md border border-[var(--header-footer-text)] px-4 py-2 text-center text-sm font-medium text-[var(--header-footer-text)] transition-colors hover:bg-[var(--header-footer-text)] hover:text-[var(--header-footer-bg)]"
              >
                Book a Consultation
              </Link>
              <div>
                <p className="mb-3 text-sm font-medium">Connect With Us</p>
                <div className="flex gap-4 md:justify-end">
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

          {/* Row 2: addresses */}
          <div className="grid grid-cols-1 overflow-hidden rounded-md border border-white/10 text-sm md:grid-cols-3">
            <div className="space-y-2 p-6 md:p-8">
              <h4 className="font-semibold">Chennai</h4>
              <p className="text-white/80">
                Nest Vibrant, Sowmya Nagar,
                <br />
                Perumbakkam – 600100
              </p>
            </div>
            <div className="space-y-2 border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">
              <h4 className="font-semibold">Coimbatore</h4>
              <p className="text-white/80">
                Rani Maigai, Near Rajalakshmi Mills,
                <br />
                Kalimadai – 641005
              </p>
            </div>
            <div className="space-y-2 border-t border-white/10 p-6 md:border-l md:border-t-0 md:p-8">
              <h4 className="font-semibold">Erode</h4>
              <p className="text-white/80">
                NPS Anbu Nagar, Nanjundapuram,
                <br />
                Industrial Estate – 638104
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-white/60">
          ©{year} IntoHive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
