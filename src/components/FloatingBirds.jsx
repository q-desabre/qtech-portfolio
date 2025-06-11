import { useEffect, useState, useCallback } from "react";

const BIRD_COLORS = [
  "#4a3728", // Brun foncé
  "#6b4423", // Brun chocolat
  "#8b5e34", // Brun moyen
  "#a67b5b", // Brun clair
  "#755642", // Brun noisette
  "#925f36", // Brun caramel
  "#614434", // Brun café
];

// Deux positions d'ailes différentes
const WING_POSITIONS = {
  up: {
    left: "M45,50 C40,42 35,38 25,42 C35,44 40,48 45,50",
    right: "M55,50 C60,42 65,38 75,42 C65,44 60,48 55,50",
  },
  down: {
    left: "M45,50 C40,52 35,54 25,52 C35,51 40,50 45,50",
    right: "M55,50 C60,52 65,54 75,52 C65,51 60,50 55,50",
  },
};

const FloatingBirds = () => {
  const [birds, setBirds] = useState([]);

  const generateBirds = useCallback(() => {
    const numberOfBirds =
      Math.floor((window.innerWidth * window.innerHeight) / 150000) + 5; // Minimum 5 oiseaux
    const newBirds = [];

    for (let i = 0; i < numberOfBirds; i++) {
      const color = BIRD_COLORS[Math.floor(Math.random() * BIRD_COLORS.length)];
      const size = (Math.random() * 20 + 25) * 1.4; // 35-63px (1.4x bigger)
      const yPosition = Math.random() * 80 + 5; // Position entre 5% et 85% de la hauteur
      const speed = Math.random() * 10 + 15;
      const delay = -(Math.random() * 10);
      const amplitude = Math.random() * 20 + 10; // Amplitude réduite pour éviter qu'ils sortent trop de l'écran

      newBirds.push({
        id: i,
        size,
        y: yPosition,
        color,
        speed,
        delay,
        amplitude,
        wingSpeed: Math.random() * 0.2 + 0.3, // 0.3-0.5s pour un battement d'aile (plus rapide)
      });
    }

    setBirds(newBirds);
  }, []);

  useEffect(() => {
    generateBirds();

    const handleResize = () => {
      generateBirds();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [generateBirds]);

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
      {birds.map((bird) => (
        <div
          key={bird.id}
          style={{
            position: "absolute",
            width: bird.size + "px",
            height: bird.size + "px",
            left: "-10%",
            top: bird.y + "%",
            animation: `fly-path-${bird.id} ${bird.speed}s linear infinite`,
            animationDelay: `${bird.delay}s`,
            willChange: "transform",
          }}
        >
          {/* Position ailes en haut */}
          <svg
            viewBox="0 0 100 100"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              animation: `wing-visibility-${bird.id} ${bird.wingSpeed}s steps(1) infinite`,
            }}
            className="wings-up"
          >
            {/* Corps de l'oiseau */}
            <path
              d={`M50,44 
                C56,44 62,46 64,50 
                C62,54 56,56 50,56 
                C44,56 38,54 36,50 
                C38,46 44,44 50,44`}
              fill={bird.color}
              stroke="rgba(70, 50, 30, 0.3)"
              strokeWidth="1.5"
            />
            {/* Queue */}
            <path
              d={`M36,50
                C32,49 28,48 24,47
                C28,50 32,51 36,50`}
              fill={bird.color}
              stroke="rgba(70, 50, 30, 0.3)"
              strokeWidth="1.5"
            />
            {/* Bec */}
            <path
              d={`M64,48
                L68,50
                L64,52`}
              fill={bird.color}
              stroke="rgba(70, 50, 30, 0.3)"
              strokeWidth="1"
            />
            {/* Ailes position haute */}
            <path
              d={WING_POSITIONS.up.left}
              fill={bird.color}
              stroke="rgba(0, 0, 0, 0.5)"
              strokeWidth="2"
            />
            <path
              d={WING_POSITIONS.up.right}
              fill={bird.color}
              stroke="rgba(0, 0, 0, 0.5)"
              strokeWidth="2"
            />
          </svg>

          {/* Position ailes en bas */}
          <svg
            viewBox="0 0 100 100"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              animation: `wing-visibility-down-${bird.id} ${bird.wingSpeed}s steps(1) infinite`,
            }}
            className="wings-down"
          >
            {/* Corps de l'oiseau */}
            <path
              d={`M50,44 
                C56,44 62,46 64,50 
                C62,54 56,56 50,56 
                C44,56 38,54 36,50 
                C38,46 44,44 50,44`}
              fill={bird.color}
              stroke="rgba(70, 50, 30, 0.3)"
              strokeWidth="1.5"
            />
            {/* Queue */}
            <path
              d={`M36,50
                C32,49 28,48 24,47
                C28,50 32,51 36,50`}
              fill={bird.color}
              stroke="rgba(70, 50, 30, 0.3)"
              strokeWidth="1.5"
            />
            {/* Bec */}
            <path
              d={`M64,48
                L68,50
                L64,52`}
              fill={bird.color}
              stroke="rgba(70, 50, 30, 0.3)"
              strokeWidth="1"
            />
            {/* Ailes position basse */}
            <path
              d={WING_POSITIONS.down.left}
              fill={bird.color}
              stroke="rgba(0, 0, 0, 0.5)"
              strokeWidth="2"
            />
            <path
              d={WING_POSITIONS.down.right}
              fill={bird.color}
              stroke="rgba(0, 0, 0, 0.5)"
              strokeWidth="2"
            />
          </svg>
        </div>
      ))}
      <style>
        {`
          ${birds
            .map(
              (bird) => `
            @keyframes fly-path-${bird.id} {
              0% {
                transform: translateX(0) translateY(0);
              }
              49.9% {
                transform: translateX(110vw) translateY(${-bird.amplitude}vh);
              }
              50% {
                transform: translateX(110vw) translateY(${-bird.amplitude}vh) scaleX(-1);
              }
              99.9% {
                transform: translateX(0) translateY(0) scaleX(-1);
              }
              100% {
                transform: translateX(0) translateY(0) scaleX(1);
              }
            }

            @keyframes wing-visibility-${bird.id} {
              0%, 49.9% {
                opacity: 1;
              }
              50%, 100% {
                opacity: 0;
              }
            }

            @keyframes wing-visibility-down-${bird.id} {
              0%, 49.9% {
                opacity: 0;
              }
              50%, 100% {
                opacity: 1;
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

export default FloatingBirds;
