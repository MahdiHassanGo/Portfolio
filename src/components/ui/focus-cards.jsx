import { useState, useEffect } from "react";
import { Card } from "./Card";

export function FocusCards({ cards }) {
  const [focusedCard, setFocusedCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640); // 640px is the breakpoint for small devices
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Handle scroll event for mobile devices
  useEffect(() => {
    if (!isMobile) return; // Exit if not on mobile

    const handleScroll = () => {
      const cardElements = document.querySelectorAll(".focus-card");
      let focusedIndex = null;

      cardElements.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check if the card is in the center of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          focusedIndex = index;
        }
      });

      setFocusedCard(focusedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto space-y-4 sm:space-y-0 sm:space-x-6 px-4 max-w-5xl mx-auto">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          focusedCard={isMobile ? focusedCard : null} // Only pass focusedCard for mobile
        />
      ))}
    </div>
  );
}
