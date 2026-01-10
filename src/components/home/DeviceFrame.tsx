import { ReactNode } from "react";

interface DeviceFrameProps {
  type: "phone" | "tablet" | "desktop";
  children: ReactNode;
  className?: string;
}

const DeviceFrame = ({ type, children, className = "" }: DeviceFrameProps) => {
  if (type === "phone") {
    return (
      <div className={`relative ${className}`}>
        {/* Phone Frame */}
        <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2.5rem] p-2 shadow-elevated">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-b-2xl z-10 flex items-center justify-center">
            <div className="w-12 h-3 bg-zinc-800 rounded-full" />
          </div>
          {/* Screen */}
          <div className="relative bg-black rounded-[2rem] overflow-hidden">
            {children}
          </div>
          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-600 rounded-full" />
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className={`relative ${className}`}>
        {/* Tablet Frame */}
        <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[1.5rem] p-3 shadow-elevated">
          {/* Camera */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-700 rounded-full" />
          {/* Screen */}
          <div className="relative bg-black rounded-xl overflow-hidden mt-2">
            {children}
          </div>
          {/* Home Button */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-zinc-600 rounded-full" />
        </div>
      </div>
    );
  }

  // Desktop
  return (
    <div className={`relative ${className}`}>
      {/* Monitor Frame */}
      <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl p-2 shadow-elevated">
        {/* Top Bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 rounded-t-lg">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
        </div>
        {/* Screen */}
        <div className="relative bg-black overflow-hidden">
          {children}
        </div>
      </div>
      {/* Stand */}
      <div className="w-16 h-8 bg-gradient-to-b from-zinc-700 to-zinc-800 mx-auto -mt-1 rounded-b-lg" />
      <div className="w-28 h-2 bg-zinc-800 mx-auto rounded-full" />
    </div>
  );
};

export default DeviceFrame;
