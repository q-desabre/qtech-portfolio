import { useEffect, useState, useCallback, useRef } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const MIN_METEORS = 5;
  const MAX_METEORS = 8;
  const meteorIdCounter = useRef(0);

  const generateId = () => {
    meteorIdCounter.current += 1;
    return `meteor-${meteorIdCounter.current}`;
  };

  const getRandomY = useCallback(() => {
    return Math.random() * 40;
  }, []);

  const getRandomX = useCallback(() => {
    return Math.random() * 90;
  }, []);

  const addMeteor = useCallback(() => {
    const newMeteor = {
      id: generateId(),
      size: Math.random() * 2 + 1,
      x: getRandomX(),
      y: getRandomY(),
      animationDuration: Math.random() * 2 + 5,
    };

    setMeteors((prev) => {
      if (prev.length < MAX_METEORS) {
        return [...prev, newMeteor];
      }
      return prev;
    });

    const removalDelay = newMeteor.animationDuration * 0.75 * 1000;

    setTimeout(() => {
      setMeteors((prev) => {
        const filtered = prev.filter((m) => m.id !== newMeteor.id);
        if (filtered.length < MIN_METEORS) {
          return [
            ...filtered,
            {
              ...newMeteor,
              id: generateId(),
              x: getRandomX(),
              y: getRandomY(),
            },
          ];
        }
        return filtered;
      });
    }, removalDelay);
  }, [getRandomX, getRandomY]);

  useEffect(() => {
    generateStars();

    // Initial meteors
    for (let i = 0; i < MIN_METEORS; i++) {
      setTimeout(() => addMeteor(), i * 500);
    }

    // Check every 2 seconds if we need more meteors
    const meteorInterval = setInterval(() => {
      setMeteors((prev) => {
        if (prev.length < MIN_METEORS) {
          addMeteor();
        }
        return prev;
      });
    }, 1000);

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, [addMeteor]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {stars?.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors?.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
            transform: "translateZ(0)",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
