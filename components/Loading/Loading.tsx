'use client';

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-blue-600 dark:text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v1m0 14v1m8-8h1M4 12H3m15.36 6.36l-.71.71M6.34 6.34l-.7-.7m12.02 0l.7-.7M6.34 17.66l-.7.7"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" />
      </motion.svg>

      <motion.p
        className="mt-3 text-sm text-blue-700 dark:text-blue-300 font-medium"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
