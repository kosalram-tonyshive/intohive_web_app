"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-16 text-white bg-[var(--service-section-bg)]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-4xl font-bold">Services</h2>

            <div className="mb-10">
              <h3 className="mb-4 flex items-center text-2xl font-semibold">
                Interior & Exterior
                <span className="ml-4 h-px flex-1 bg-white" />
              </h3>
              <p className="text-white/90">
                At Into Hive, we believe that every space has the potential to inspire. As a
                full-service interior design firm, we are dedicated to transforming homes and
                businesses into stylish, functional environments that reflect our clients' unique
                personalities and visions.
              </p>
            </div>

            <div>
              <h3 className="mb-4 flex items-center text-2xl font-semibold">
                Construction & Architecture
                <span className="ml-4 h-px flex-1 bg-white" />
              </h3>
              <p className="text-white/90">
                At Into Hive, we believe that every space has the potential to inspire. As a
                full-service interior design firm, we are dedicated to transforming homes and
                businesses into stylish, functional environments that reflect our clients' unique
                personalities and visions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507086182420-83d4af51e6f8?auto=format&fit=crop&w=600&q=80"
              alt="Interior design"
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1507084830850-5367e9d0b640?auto=format&fit=crop&w=600&q=80"
              alt="Modern architecture"
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
