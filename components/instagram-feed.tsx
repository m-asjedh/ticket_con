"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";
import artisitImage from "@/public/artist-4.jpg";

const instagramImages = [
  {
    id: 1,
    src: artisitImage,
    alt: "DJ with headphones",
  },
  {
    id: 2,
    src: artisitImage,
    alt: "Female artist with cap",
  },
  {
    id: 3,
    src: artisitImage,
    alt: "Guitarist performing",
  },
  {
    id: 4,
    src: artisitImage,
    alt: "DJ equipment",
  },
  {
    id: 5,
    src: artisitImage,
    alt: "Concert crowd",
  },
  {
    id: 6,
    src: artisitImage,
    alt: "Stage lights",
  },
  {
    id: 7,
    src: artisitImage,
    alt: "Artist performing",
  },
  {
    id: 8,
    src: artisitImage,
    alt: "Festival atmosphere",
  },
];

export default function InstagramFeed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Follow <span className="text-[hsl(var(--primary))]">@TicketCon</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Stay updated with the latest events and behind-the-scenes content
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg instagram-item aspect-square"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="instagram-overlay">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
