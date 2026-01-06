import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import screenshotDashboard from "@/assets/screenshot-dashboard.png";
import screenshotCharts from "@/assets/screenshot-charts.png";
import screenshotAdd from "@/assets/screenshot-add.png";

const screenshots = [
  {
    id: 1,
    image: screenshotDashboard,
    title: "Dashboard Overview",
    description: "See your financial summary at a glance",
  },
  {
    id: 2,
    image: screenshotCharts,
    title: "Charts & Analytics",
    description: "Visualize spending patterns with intuitive charts",
  },
  {
    id: 3,
    image: screenshotAdd,
    title: "Add Transactions",
    description: "Log income and expenses in seconds",
  },
];

const ScreenshotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See DhanDiary in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Clean, intuitive interface designed for effortless money management.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all shadow-soft"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Screenshots */}
            <div className="flex items-end justify-center gap-4 lg:gap-6 py-8">
              {screenshots.map((screenshot, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + screenshots.length) % screenshots.length;
                const isNext = index === (activeIndex + 1) % screenshots.length;
                const isVisible = isActive || isPrev || isNext;

                if (!isVisible && screenshots.length > 3) return null;

                return (
                  <div
                    key={screenshot.id}
                    className={`transition-all duration-500 ease-out cursor-pointer ${
                      isActive
                        ? "scale-100 opacity-100 z-10"
                        : "scale-75 opacity-50 z-0"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={`relative rounded-3xl overflow-hidden shadow-elevated transition-shadow duration-300 ${
                        isActive ? "shadow-elevated" : "shadow-card"
                      }`}
                    >
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className={`object-cover transition-all duration-500 ${
                          isActive ? "w-48 sm:w-56 lg:w-64" : "w-36 sm:w-44 lg:w-48"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all shadow-soft"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Caption */}
          <div className="text-center mt-8">
            <h3 className="font-display font-semibold text-foreground text-lg mb-1">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {screenshots[activeIndex].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
