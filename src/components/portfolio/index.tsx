import { Plus } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const projects = [
    {
      title: "Modern Living",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a9b47d2d30?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dining Elegance",
      image:
        "https://images.unsplash.com/photo-1596079890741-4496c3766a1a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Kitchen Inspiration",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cozy Bedroom",
      image:
        "https://images.unsplash.com/photo-1602524819883-459b6cf59cc6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="mb-6 text-4xl text-primary font-extralight">Portfolio</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {projects.map((project) => (
            <Card key={project.title} className="relative h-96 min-w-[280px] overflow-hidden">
              <CardContent className="relative h-full w-full p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </CardContent>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-hive-500 text-white">
                  <Plus className="h-5 w-5" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-end justify-center bg-black/60 opacity-0 transition-opacity hover:opacity-100">
                <button
                  type="button"
                  className="mb-6 flex items-center gap-2 rounded-full bg-hive-500 px-4 py-2 text-white"
                >
                  View Project
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
