import { useEffect, useRef } from 'react';

export function useHeroSkillsScroll() {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    // Function to handle the wheel event
    const handleWheel = (e) => {
      // If already scrolling, don't trigger again
      if (isScrollingRef.current) return;

      const heroSection = document.getElementById('hero-about');
      const skillsSection = document.getElementById('skills');
      
      if (!heroSection || !skillsSection) return;
      
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const skillsTop = skillsSection.offsetTop;
      const currentPos = window.scrollY;
        // Check if we're in the transition zone (near the bottom of hero section)
      // Adjust the transition zone to be more responsive - 70% of the way through the hero section
      const isNearHeroBottom = currentPos > (heroBottom - window.innerHeight * 0.7) && 
                              currentPos < (skillsTop + window.innerHeight * 0.2);
                              
      // Only apply the snap scrolling in this specific zone
      if (isNearHeroBottom) {
        // Determine scroll direction
        const scrollingDown = e.deltaY > 0;
        const targetPosition = scrollingDown ? skillsTop : heroSection.offsetTop;
        
        // Prevent default scroll behavior
        e.preventDefault();
        
        // Set flag to prevent multiple triggers
        isScrollingRef.current = true;
          // Add transition class to the target section
        if (scrollingDown) {
          skillsSection.classList.add('animate-hero-skills-enter');
          
          // Remove the class after animation completes
          setTimeout(() => {
            skillsSection.classList.remove('animate-hero-skills-enter');
          }, 800);
        } else {
          heroSection.classList.add('animate-hero-skills-enter');
          
          // Remove the class after animation completes
          setTimeout(() => {
            heroSection.classList.remove('animate-hero-skills-enter');
          }, 800);
        }
        
        // Perform smooth scroll
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Reset the flag after animation completes
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    // Add wheel event listener
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Touch handling for mobile devices
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e) => {
      // If already scrolling, don't trigger again
      if (isScrollingRef.current) return;
      
      const heroSection = document.getElementById('hero-about');
      const skillsSection = document.getElementById('skills');
      
      if (!heroSection || !skillsSection) return;
      
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const skillsTop = skillsSection.offsetTop;
      const currentPos = window.scrollY;
      
      // Similar transition zone as for wheel events
      const isNearHeroBottom = currentPos > (heroBottom - window.innerHeight * 0.7) && 
                               currentPos < (skillsTop + window.innerHeight * 0.2);
                               
      if (isNearHeroBottom) {
        const touchY = e.touches[0].clientY;
        const touchDiff = touchStartY - touchY;
        
        // Only trigger if there's significant movement (to avoid small accidental touches)
        if (Math.abs(touchDiff) > 40) {
          const scrollingDown = touchDiff > 0;
          const targetPosition = scrollingDown ? skillsTop : heroSection.offsetTop;
          
          // Prevent default behavior
          e.preventDefault();
          
          // Set flag to prevent multiple triggers
          isScrollingRef.current = true;
          
          // Add animation classes as in the wheel handler
          if (scrollingDown) {
            skillsSection.classList.add('animate-hero-skills-enter');
            setTimeout(() => {
              skillsSection.classList.remove('animate-hero-skills-enter');
            }, 800);
          } else {
            heroSection.classList.add('animate-hero-skills-enter');
            setTimeout(() => {
              heroSection.classList.remove('animate-hero-skills-enter');
            }, 800);
          }
          
          // Perform smooth scroll
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Reset the flag after animation completes
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);
        }
      }
    };
    
    // Add touch event listeners
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, []);
}
