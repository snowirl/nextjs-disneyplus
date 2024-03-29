import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ShowsCarousel from "@/components/FeaturedCarousel";
import FetchMovies from "@/components/FetchMovies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FetchMovies />
    </main>
  );
}
