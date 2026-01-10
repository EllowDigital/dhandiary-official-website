import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smartphone, Tablet, Monitor } from "lucide-react";
import DeviceFrame from "./DeviceFrame";

const screenshots = [
  {
    id: 1,
    image: "/img/Screenshot/1s.jpg",
    title: "Dashboard Overview",
    description: "Get a complete view of your finances at a glance",
  },
  {
    id: 2,
    image: "/img/Screenshot/2s.jpg",
    title: "Transaction History",
    description: "Track all your income and expenses with detailed logs",
  },
  {
    id: 3,
    image: "/img/Screenshot/3s.jpg",
    title: "Add Transaction",
    description: "Quick and easy transaction entry with categories",
  },
  {
    id: 4,
    image: "/img/Screenshot/4s.jpg",
    title: "Charts & Analytics",
    description: "Visualize spending patterns with beautiful charts",
  },
  {
    id: 5,
    image: "/img/Screenshot/5s.jpg",
    title: "Budget Planning",
    description: "Set and track budgets for different categories",
  },
  {
    id: 6,
    image: "/img/Screenshot/6s.jpg",
    title: "Category Management",
    description: "Organize transactions with custom categories",
  },
  {
    id: 7,
    image: "/img/Screenshot/7s.jpg",
    title: "Reports & Insights",
    description: "Generate detailed financial reports",
  },
  {
    id: 8,
    image: "/img/Screenshot/8s.jpg",
    title: "Settings & Security",
    description: "Customize app and manage security settings",
  },
  {
    id: 9,
    image: "/img/Screenshot/9s.jpg",
    title: "Account Overview",
    description: "Manage multiple accounts in one place",
  },
];

type DeviceType = "phone" | "tablet" | "desktop";

const ScreenshotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deviceType, setDeviceType] = useState<DeviceType>("phone");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const deviceButtons = [
    { type: "phone" as DeviceType, icon: Smartphone, label: "Phone" },
    { type: "tablet" as DeviceType, icon: Tablet, label: "Tablet" },
    { type: "desktop" as DeviceType, icon: Monitor, label: "Desktop" },
  ];

  const getDeviceSize = () => {
    switch (deviceType) {
      case "phone":
        return "w-48 sm:w-56 lg:w-64";
      case "tablet":
        return "w-64 sm:w-80 lg:w-96";
      case "desktop":
        return "w-80 sm:w-96 lg:w-[28rem]";
    }
  };

  const getSideDeviceSize = () => {
    switch (deviceType) {
      case "phone":
        return "w-36 sm:w-44 lg:w-48";
      case "tablet":
        return "w-48 sm:w-60 lg:w-72";
      case "desktop":
        return "w-60 sm:w-72 lg:w-80";
    }
  };

  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See DhanDiary in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Clean, intuitive interface designed for effortless money management.
          </p>
        </div>

        {/* Device Type Selector */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {deviceButtons.map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => setDeviceType(type)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                deviceType === type
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
              aria-label={`View on ${label}`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all shadow-soft z-20"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Screenshots */}
            <div className="flex items-center justify-center gap-4 lg:gap-6 py-8 overflow-hidden">
              {screenshots.map((screenshot, index) => {
                const isActive = index === activeIndex;
                const isPrev =
                  index ===
                  (activeIndex - 1 + screenshots.length) % screenshots.length;
                const isNext = index === (activeIndex + 1) % screenshots.length;
                const isVisible = isActive || isPrev || isNext;

                if (!isVisible && screenshots.length > 3) return null;

                return (
                  <div
                    key={screenshot.id}
                    className={`transition-all duration-500 ease-out cursor-pointer ${
                      isActive
                        ? "scale-100 opacity-100 z-10"
                        : "scale-75 opacity-40 z-0 hidden sm:block"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <DeviceFrame type={deviceType}>
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className={`object-cover transition-all duration-500 ${
                          isActive ? getDeviceSize() : getSideDeviceSize()
                        }`}
                        loading="lazy"
                      />
                    </DeviceFrame>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all shadow-soft z-20"
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
