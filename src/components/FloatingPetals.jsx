import { useEffect, useState, useCallback } from "react";

const PETAL_COLORS = [
  "#ffb7c5", // Rose vif
  "#ff8fa8", // Rose moyen
  "#ff6b8b", // Rose foncé
];

const PETAL_VARIANTS = [
  {
    path: "M10,0 C15,2 20,8 18,15 C15,22 5,22 2,15 C0,8 5,2 10,0",
    rotation: 0,
  },
  {
    path: "M10,0 C16,3 18,10 15,18 C12,25 8,25 5,18 C2,10 4,3 10,0",
    rotation: 30,
  },
  {
    path: "M10,0 C14,4 16,12 12,18 C8,24 4,22 2,15 C0,8 6,2 10,0",
    rotation: -15,
  },
];

const FloatingPetals = () => {
  const [petals, setPetals] = useState([]);

  const generatePetals = useCallback(() => {
    const numberOfPetals = Math.floor(
      (window.innerWidth * window.innerHeight) / 35000
    );
    const newPetals = [];

    for (let i = 0; i < numberOfPetals; i++) {
      const color =
        PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const selectedVariant =
        PETAL_VARIANTS[Math.floor(Math.random() * PETAL_VARIANTS.length)];

      // Distribute petals across the full width
      const startX = Math.random() * 120 - 10; // -10% to 110% of screen width
      const endX = startX + (Math.random() * 30 - 15); // Random drift left or right

      newPetals.push({
        id: i,
        size: Math.random() * 12.5 + 15, // 15-27.5px (moyenne entre 20-35px et 10-20px)
        x: startX,
        endX: endX,
        y: Math.random() * -50, // Start above screen
        rotation: Math.random() * 360,
        color,
        path: selectedVariant.path,
        variantRotation: selectedVariant.rotation,
        fallDuration: Math.random() * 3 + 8, // 8-11 seconds (plus rapide)
        swayAmplitude: Math.random() * 15 + 5, // 5-20px sway
        swayDuration: Math.random() * 2 + 2, // 2-4 seconds per sway
      });
    }

    setPetals(newPetals);
  }, []);

  useEffect(() => {
    generatePetals();

    const handleResize = () => {
      generatePetals();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [generatePetals]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 5,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          style={{
            position: "absolute",
            width: petal.size + "px",
            height: petal.size + "px",
            left: petal.x + "%",
            top: petal.y + "%",
            animation: `fall-${petal.id} ${petal.fallDuration}s linear infinite`,
            willChange: "transform",
          }}
        >
          <svg
            viewBox="0 0 20 25"
            style={{
              width: "100%",
              height: "100%",
              transform: `rotate(${petal.rotation + petal.variantRotation}deg)`,
              animation: `sway-${petal.id} ${petal.swayDuration}s ease-in-out infinite`,
            }}
          >
            <path
              d={petal.path}
              fill={petal.color}
              stroke="rgba(0, 0, 0, 0.3)"
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
      <style>
        {`
          ${petals
            .map(
              (petal) => `
            @keyframes fall-${petal.id} {
              0% {
                transform: translate(0, -10vh);
              }
              100% {
                transform: translate(${petal.endX - petal.x}%, 120vh);
              }
            }

            @keyframes sway-${petal.id} {
              0%, 100% {
                transform: rotate(${
                  petal.rotation + petal.variantRotation
                }deg) translateX(0);
              }
              25% {
                transform: rotate(${
                  petal.rotation + petal.variantRotation + 15
                }deg) translateX(${petal.swayAmplitude}px);
              }
              75% {
                transform: rotate(${
                  petal.rotation + petal.variantRotation - 15
                }deg) translateX(-${petal.swayAmplitude}px);
              }
            }
          `
            )
            .join("\n")}
        `}
      </style>
    </div>
  );
};

export default FloatingPetals;
