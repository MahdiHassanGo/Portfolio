import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Individual Card Component
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <a
    href={card.link} // Use the 'link' property from the card object
    target="_blank" // Open the link in a new tab
    rel="noopener noreferrer" // Security best practice
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 w-80 sm:w-96 transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {/* Use standard <img> for compatibility */}
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 h-full w-full"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-4 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium text-white">
        {card.title}
      </div>
    </div>
  </a>
));
Card.displayName = "Card";