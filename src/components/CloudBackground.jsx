import { useEffect, useState, useCallback } from "react";

const CLOUD_VARIANTS = [
  {
    // Nuage standard (3 bosses équilibrées)
    leftBump: { left: "20%", width: "35%", top: "25%", height: "35%" },
    centerBump: { left: "40%", width: "40%", top: "20%", height: "40%" },
    rightBump: { right: "15%", width: "30%", top: "30%", height: "35%" },
  },
  {
    // Nuage avec grosse bosse centrale
    leftBump: { left: "15%", width: "30%", top: "30%", height: "30%" },
    centerBump: { left: "35%", width: "45%", top: "15%", height: "45%" },
    rightBump: { right: "15%", width: "25%", top: "35%", height: "30%" },
  },
  {
    // Nuage plus allongé
    leftBump: { left: "15%", width: "30%", top: "25%", height: "35%" },
    centerBump: { left: "35%", width: "35%", top: "20%", height: "40%" },
    rightBump: { right: "10%", width: "35%", top: "25%", height: "35%" },
  },
];

const CloudBackground = () => {
  const [clouds, setClouds] = useState([]);

  const getRandomSize = useCallback(() => {
    return Math.random() * 250 + 150;
  }, []);

  const getRandomPosition = useCallback(() => {
    const sections = 4;
    const section = Math.floor(Math.random() * sections);
    return {
      x: section * (100 / sections) + Math.random() * (100 / sections),
      y: Math.random() * 80 + 10,
    };
  }, []);

  const generateClouds = useCallback(() => {
    const numberOfClouds = Math.floor(
      (window.innerWidth * window.innerHeight) / 200000
    );
    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      const baseSize = getRandomSize();
      const position = getRandomPosition();
      const variant =
        CLOUD_VARIANTS[Math.floor(Math.random() * CLOUD_VARIANTS.length)];

      newClouds.push({
        id: i,
        width: baseSize,
        height: baseSize * 0.6,
        x: position.x,
        y: position.y,
        moveSpeed: Math.random() * 10 + 15,
        opacity: 0.85 + Math.random() * 0.15,
        blur: 0.2 + Math.random() * 0.2, // Moins de flou pour voir le contour
        delay: -(Math.random() * 20),
        variant,
      });
    }

    setClouds(newClouds);
  }, [getRandomSize, getRandomPosition]);

  useEffect(() => {
    generateClouds();

    const handleResize = () => {
      generateClouds();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [generateClouds]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 10 }}
    >
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud-container"
          style={{
            position: "absolute",
            width: cloud.width + "px",
            height: cloud.height + "px",
            left: cloud.x + "%",
            top: cloud.y + "%",
            opacity: cloud.opacity,
            animation: `float-right ${cloud.moveSpeed}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
            willChange: "transform",
          }}
        >
          {/* Base du nuage avec contour */}
          <div
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: "40%",
              height: "30%",
              background: "var(--cloud-color)",
              borderRadius: "50px",
              filter: `blur(${cloud.blur}px)`,
              border: "2px solid rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Bosse gauche avec contour */}
          <div
            style={{
              position: "absolute",
              ...cloud.variant.leftBump,
              background: "var(--cloud-color)",
              borderRadius: "50%",
              filter: `blur(${cloud.blur}px)`,
              border: "2px solid rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Bosse centrale avec contour */}
          <div
            style={{
              position: "absolute",
              ...cloud.variant.centerBump,
              background: "var(--cloud-color)",
              borderRadius: "50%",
              filter: `blur(${cloud.blur}px)`,
              border: "2px solid rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Bosse droite avec contour */}
          <div
            style={{
              position: "absolute",
              ...cloud.variant.rightBump,
              background: "var(--cloud-color)",
              borderRadius: "50%",
              filter: `blur(${cloud.blur}px)`,
              border: "2px solid rgba(0, 0, 0, 0.3)",
            }}
          />

          {/* Densité centrale */}
          <div
            style={{
              position: "absolute",
              left: "30%",
              width: "40%",
              top: "35%",
              height: "30%",
              background: "var(--cloud-color)",
              borderRadius: "50%",
              filter: `blur(${cloud.blur * 0.5}px)`,
              opacity: 0.8,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CloudBackground;
