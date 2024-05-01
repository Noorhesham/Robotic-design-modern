import { motion } from "framer-motion";

const CurvedGradientLine = () => {
  return (
    <svg
      width="300" // Increased width
      height="80" // Adjusted height
      viewBox="0 0 300 80" // Adjusted viewBox for better clarity and increased width
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision" // Enhanced shape rendering for smoother curves
      strokeMiterlimit="10" // Increased stroke miter limit for sharper joins
    >
      {/* Curved path */}
      <path
        d="M10,40 C50,20 250,20 290,40" // Adjusted path to increase width and decrease curvature
        fill="none"
        strokeWidth="8" // Increased stroke width for better clarity
        strokeLinecap="round"
      />
      {/* Define gradient for the stroke */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop  offset="0%" stopColor="#ADD8E6" /> {/* Baby blue */}
          <stop  offset="20%" stopColor="#FFC0CB" /> {/* Pink */}
          <stop  offset="40%" stopColor="#90EE90" /> {/* Light green */}
          <stop  offset="60%" stopColor="#FFFF00" /> {/* Yellow */}
          <stop  offset="80%" stopColor="#B0E0E6" /> {/* Light purple */}
        </linearGradient>
      </defs>
      {/* Animate the drawing of the path */}
      <motion.path
        d="M10,40 C50,20 250,20 290,40" // Adjusted path to increase width and decrease curvature
        fill="none"
        stroke="url(#gradient)" // Use gradient for stroke
        strokeWidth="8" // Increased stroke width for better clarity
        strokeLinecap="round"
        initial={{ pathLength: 0 }} // Start with a pathLength of 0
        animate={{ pathLength: 1 }} // Animate to a pathLength of 1 (fully drawn)
        transition={{ duration: 1, ease: "easeInOut" }} // Faster animation
      />
    </svg>
  );
};

export default CurvedGradientLine;
