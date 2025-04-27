"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import artistImage1 from "@/public/artist-1.jpg";
import artistImage2 from "@/public/artist-2.jpg";
import artistImage3 from "@/public/artist-3.jpg";

const events = [
  {
    id: 1,
    title: "SS FESTIVAL",
    artist: "SARITH & SURITH",
    date: "June 15, 2024",
    time: "6:00 PM",
    location: "Viharmahadevi Park, Colombo",
    description:
      "Experience the ultimate music festival with top artists from around the world. A night of unforgettable performances and amazing vibes.",
    image: artistImage1,
  },
  {
    id: 2,
    title: "WAYO FESTIVAL",
    artist: "WAYO BAND",
    date: "July 22, 2024",
    time: "8:00 PM",
    location: "Viharmahadevi Park, Colombo",
    description:
      "Don't miss the chance to see WAYO BAND perform live with their full band. An intimate concert experience with all their greatest hits.",
    image: artistImage2,
  },
  {
    id: 3,
    title: "CENTGRADZ FESTIVAL",
    artist: "CENTGRADZ BAND",
    date: "August 10, 2024",
    time: "9:00 PM",
    location: "Viharmahadevi Park, Colombo",
    description:
      "The hottest beach party of the summer featuring CENTGRADZ BAND and special guest performers. Dance the night away under the stars.",
    image: artistImage3,
  },
];

export default function UpcomingEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Upcoming <span className="text-[hsl(var(--primary))]">Events</span>
        </h2>

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold">{event.title}</h3>
                <p className="text-xl text-[hsl(var(--primary))]">
                  {event.artist}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-400">{event.description}</p>

                <Button size="lg" className="mt-4">
                  Buy Tickets
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
