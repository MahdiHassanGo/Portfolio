import { useState } from "react";
import { Card } from "./Card";

export function FocusCards({ cards }) {
    const [hovered, setHovered] = useState(null);
  
    return (
      <div className="flex flex-wrap sm:flex-nowrap overflow-x-auto space-y-4 sm:space-y-0 sm:space-x-6 px-4 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    );
  }