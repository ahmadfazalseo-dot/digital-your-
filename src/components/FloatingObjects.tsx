import { motion } from "motion/react";

interface FloatingObject {
  id: number;
  type: "circle" | "ring" | "plus" | "square" | "blob";
  size: number;
  initialX: string;
  initialY: string;
  duration: number;
  delay: number;
  color: string;
  blur?: boolean;
}

export function FloatingObjects() {
  const objects: FloatingObject[] = [
    // Delicate blurs (background ambiance)
    { id: 1, type: "blob", size: 300, initialX: "15%", initialY: "12%", duration: 24, delay: 0, color: "bg-blue-400/10", blur: true },
    { id: 2, type: "blob", size: 400, initialX: "75%", initialY: "25%", duration: 32, delay: 2, color: "bg-indigo-400/8", blur: true },
    { id: 3, type: "blob", size: 280, initialX: "40%", initialY: "65%", duration: 28, delay: 4, color: "bg-purple-300/10", blur: true },
    { id: 4, type: "blob", size: 350, initialX: "80%", initialY: "80%", duration: 30, delay: 1, color: "bg-blue-300/8", blur: true },

    // Crisper technical wireframes (geometric floating items)
    { id: 5, type: "ring", size: 48, initialX: "8%", initialY: "30%", duration: 18, delay: 0, color: "border-blue-500/20" },
    { id: 6, type: "plus", size: 20, initialX: "85%", initialY: "15%", duration: 14, delay: 1, color: "text-blue-500/30" },
    { id: 7, type: "circle", size: 16, initialX: "65%", initialY: "45%", duration: 22, delay: 3, color: "bg-blue-500/15" },
    { id: 8, type: "ring", size: 64, initialX: "25%", initialY: "82%", duration: 20, delay: 2, color: "border-indigo-400/30" },
    { id: 9, type: "plus", size: 24, initialX: "45%", initialY: "20%", duration: 16, delay: 4, color: "text-indigo-400/30" },
    { id: 10, type: "ring", size: 32, initialX: "90%", initialY: "55%", duration: 15, delay: 0.5, color: "border-purple-400/20" },
    { id: 11, type: "circle", size: 12, initialX: "12%", initialY: "60%", duration: 25, delay: 1.5, color: "bg-purple-400/20" },
    { id: 12, type: "plus", size: 18, initialX: "50%", initialY: "90%", duration: 19, delay: 3, color: "text-blue-400/30" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {objects.map((obj) => {
        // Render based on type
        const renderShape = () => {
          switch (obj.type) {
            case "blob":
              return (
                <div 
                  className={`w-full h-full rounded-full ${obj.color} ${obj.blur ? "blur-[80px]" : ""}`} 
                />
              );
            case "ring":
              return (
                <div 
                  className={`w-full h-full rounded-full border-2 ${obj.color} bg-transparent`}
                />
              );
            case "circle":
              return (
                <div 
                  className={`w-full h-full rounded-full ${obj.color}`}
                />
              );
            case "plus":
              return (
                <svg 
                  viewBox="0 0 24 24" 
                  className={`w-full h-full ${obj.color}`}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              );
            default:
              return null;
          }
        };

        return (
          <motion.div
            key={obj.id}
            style={{
              width: obj.size,
              height: obj.size,
              position: "absolute",
              left: obj.initialX,
              top: obj.initialY,
            }}
            animate={{
              x: [0, 45, -30, 20, 0],
              y: [0, -35, 40, -15, 0],
              rotate: obj.type === "blob" ? [0, 180, 360] : [0, 180, 360],
              scale: [1, 1.08, 0.95, 1.03, 1],
            }}
            transition={{
              duration: obj.duration,
              delay: obj.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center select-none"
          >
            {renderShape()}
          </motion.div>
        );
      })}
    </div>
  );
}
