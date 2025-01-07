import React, { useState } from "react";
import { cn } from "../../lib/utils";

// Individual Card Component
export const Card = React.memo(({ card, index, focusedCard }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={card.link} // Use the 'link' property from the card object
      target="_blank" // Open the link in a new tab
      rel="noopener noreferrer" // Security best practice
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "focus-card rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 w-80 sm:w-96 transition-all duration-300 ease-out",
        // Apply blur and scale for mobile based on focusedCard
        focusedCard !== null && focusedCard !== index && "blur-sm scale-[0.98]",
        // Apply blur and scale for desktop based on hover
        focusedCard === null && isHovered === false && "hover:blur-sm hover:scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 h-full w-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-4 px-4 transition-opacity duration-300",
          // Show title if focused (mobile) or hovered (desktop)
          (focusedCard === index || isHovered) ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium text-white">
          {card.title}
        </div>
      </div>
    </a>
  );
});
Card.displayName = "Card";