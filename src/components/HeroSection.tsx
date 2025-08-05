"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  mascotImage?: string;
}

const HeroSection = ({
  title = "It's Jollibee Time!",
  subtitle = "Crispylicious, Juicylicious Chickenjoy and more Filipino favorites delivered to your door.",
  ctaText = "Order Now",
  ctaLink = "/order",
  secondaryCtaText = "Find a Store",
  secondaryCtaLink = "/stores",
  backgroundImage = "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1200&q=80",
  mascotImage = "/jollibee-mascot.png",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-red-600">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Jollibee Food Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-red-600/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 py-12">
        {/* Text Content */}
        <div className="text-white max-w-xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-yellow-100">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ctaLink}>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold text-lg px-8 py-6"
              >
                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={secondaryCtaLink}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 font-medium text-lg px-8 py-6"
              >
                <MapPin className="mr-2 h-5 w-5" /> {secondaryCtaText}
              </Button>
            </Link>
          </div>

          {/* Promotional Banner */}
          <div className="mt-8 bg-yellow-500/90 text-red-900 font-bold py-2 px-4 rounded-lg inline-block animate-pulse">
            Limited Time Offer: Free Peach Mango Pie with orders over $25!
          </div>
        </div>

        {/* Mascot Image - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block relative h-[400px] w-[300px]">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=jollibee"
            alt="Jollibee Mascot"
            fill
            className="object-contain animate-bounce-slow"
          />
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[50%] z-10" />
    </section>
  );
};

export default HeroSection;
