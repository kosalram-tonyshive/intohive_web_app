"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo and contact */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <Image src="/logo-mark.svg" alt="IntoHive logo" width={180} height={60} priority />
            <div className="flex flex-col gap-3 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-hive-500" />
                <span>+91 789 789 5027</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-hive-500" />
                <span>info@intohive.in</span>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="flex-1 text-sm md:flex md:justify-center">
            <div className="flex flex-col divide-y divide-white/10 overflow-hidden rounded-md border border-white/10 md:flex-row md:divide-x md:divide-y-0">
              <div className="p-6 md:p-8">
                <h4 className="font-semibold">Chennai</h4>
                <p className="mt-2 text-white/80">
                  Nest Vibrant, Sowmya Nagar,
                  <br />
                  Perumbakkam – 600100
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="font-semibold">Coimbatore</h4>
                <p className="mt-2 text-white/80">
                  Rani Maigai, Near Rajalakshmi Mills,
                  <br />
                  Kalimadai – 641005
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="font-semibold">Erode</h4>
                <p className="mt-2 text-white/80">
                  NPS Anbu Nagar, Nanjundapuram,
                  <br />
                  Industrial Estate – 638104
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-6 md:w-1/4">
            <Link
              href="#"
              className="rounded-md border border-white/50 px-4 py-2 text-center text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Book a Consultation
            </Link>
            <div>
              <p className="mb-3 text-sm font-medium">Connect With Us</p>
              <div className="flex gap-4 text-white/80">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-4 text-xs text-white/60">
          ©2024 IntoHive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
