import Image from "next/image";
import { Container } from "@/components/ui/container";

export default function About() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-4xl font-extralight mb-6 text-primary">About us</h2>
            <p className="mb-4 text-gray-700">
              At Into Hive, we believe that every space has the potential to inspire. As a
              full-service interior design firm, we are dedicated to transforming homes and
              businesses into stylish, functional environments that reflect our clients' unique
              personalities and visions.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a modern update, a timeless classic look, or something
              entirely bespoke, our expert team is here to bring your ideas to life with a passion
              for creativity and a commitment to quality. Into Hive approaches each project with
              meticulous attention to detail and a deep understanding of design trends, materials,
              and functionality. We work closely with you, ensuring that every element of your space
              is thoughtfully considered and perfectly executed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&h=360&q=80"
                alt="Jennifer Martin"
                width={300}
                height={360}
                className="h-80 w-full rounded-md object-cover"
              />
              <p className="mt-4 font-semibold">Jennifer Martin</p>
              <p className="text-sm text-gray-600">Interior Designer</p>
            </div>
            <div className="text-center">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=360&q=80"
                alt="David Thompson"
                width={300}
                height={360}
                className="h-80 w-full rounded-md object-cover"
              />
              <p className="mt-4 font-semibold">David Thompson</p>
              <p className="text-sm text-gray-600">Architectural Designer</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
